/* Service worker: hace que la app funcione sin conexión.
   La versión llega en la URL de registro (sw.js?v=1.1), así el número sigue
   viviendo en un único sitio: la constante VERSION de index.html. */

const VER = new URL(location).searchParams.get('v') || '0';
const CACHE = 'voley-' + VER;
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', ev => {
  ev.waitUntil(
    caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

// al activarse una versión nueva se tiran las cachés de las anteriores
self.addEventListener('activate', ev => {
  ev.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', ev => {
  const req = ev.request;
  if(req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;

  // La página: primero la red, para que un despliegue nuevo llegue enseguida;
  // si no hay cobertura, la copia guardada. Es lo que salva un pabellón sin señal.
  if(req.mode === 'navigate'){
    ev.respondWith(
      fetch(req)
        .then(res => {
          const copia = res.clone();
          caches.open(CACHE).then(c => c.put('./index.html', copia));
          return res;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // El resto (iconos, manifiesto): primero la caché, que no cambian casi nunca.
  ev.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copia = res.clone();
      if(res.ok) caches.open(CACHE).then(c => c.put(req, copia));
      return res;
    }))
  );
});
