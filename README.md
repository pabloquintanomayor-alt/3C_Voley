# 3C Vóley · Táctica

Aplicación de táctica de voleibol en un **único archivo HTML**, sin dependencias ni
instalación. Se abre en cualquier navegador y funciona sin conexión: todo lo que
guardes (plantilla, jugadas, sesiones) se queda en tu propio navegador.

**Abrir la aplicación → https://pabloquintanomayor-alt.github.io/3C_Voley/**

## Qué hace

### Pizarra
Pista completa con los doce jugadores y el balón arrastrables. Herramientas de
desplazamiento, pase, ataque, finta y trazo libre.

Las jugadas se montan **por pasos**: capturas una posición, mueves lo que cambie,
capturas otra. Al pasar de un paso al siguiente se dibuja el rastro de quién se ha
movido y por dónde. Se reproducen solas para enseñárselas al equipo.

### Rotaciones
Los **seis sistemas** de juego, cada uno con sus seis rotaciones:

| Sistema | Quién coloca |
|---|---|
| 6-6 sin especialización | el de zona 3 |
| 6-3 tres colocadores | el colocador delantero, desde zona 3 |
| 4-2 clásico | el delantero, desde zona 3 |
| 4-2 internacional | el delantero, desplazándose a zona 2 |
| 6-2 | el zaguero, penetrando |
| 5-1 | el colocador único |

Y las **cuatro fases** de la jugada: saque, recepción, colocación-ataque y
defensa-bloqueo.

En saque y recepción comprueba la **falta de posición** en tiempo real mientras
arrastras, explicando cuál es el error. En ataque y defensa no comprueba nada,
porque la falta de posición solo existe hasta que el sacador golpea el balón.

En defensa puedes mover al rematador rival por su campo y marcar hacia dónde va el
balón; el bloqueo se replanta solo delante de él y se dibuja el cono que tapa.

### Equipo
Plantilla con dorsal, nombre y posición, y la alineación por sistema. Tocando a un
jugador —en la lista o en la pista— sale quién puede sustituirle, con los de su
misma posición primero.

### Sesión
Planificador por bloques con duración, objetivo y notas, con plantillas de
ejercicios de voleibol y suma automática de tiempos. Se imprime.

## Uso

Está pensada para **tablet en pista**. El botón «Girar» pone la pista en horizontal,
que aprovecha mucho mejor una pantalla apaisada, y «Exponer» esconde los menús para
proyectarla.

## Desarrollo

Es un solo archivo, `index.html`. No hay build, ni dependencias, ni servidor: se
edita y se abre.
