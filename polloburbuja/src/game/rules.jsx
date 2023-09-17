import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Layout from '../layout.jsx'

function Rules() {
  return (
    <Layout>
      <Carousel showThumbs={false} showStatus={false} showIndicators={false} width='100vh'>
        <div>
          <h1>Inicio de Partida</h1>
          <p>• La partida comienza con 4 jugadores fijos, sin posibilidad de cambios.</p>
          <p>• Cada jugador comienza con 10 monedas.</p>
        </div>
        <div>
          <h1>Turnos y Movimientos</h1>
          <p>• Los jugadores se turnan según un orden predeterminado.</p>
          <p>• Se lanza un dado de 6 caras al principio de cada turno para determinar las casillas a avanzar.</p>
          <p>• Cada turno tiene un límite de tiempo de 100 segundos.</p>
        </div>
        <div>
          <h1>Sistema de Monedas</h1>
          <p>• Los jugadores pueden ganar o perder monedas según la casilla en la que caigan.</p>
          <p>• Las monedas se pueden gastar en la tienda para comprar potenciadores.</p>
        </div>
        <div>
          <h1>Opciones en el Turno</h1>
          <p>• En su turno, cada jugador puede elegir entre lanzar el dado o acceder a la tienda.</p>
          <p>• La tienda permite comprar potenciadores que se activan inmediatamente en el mismo turno.</p>
        </div>
        <div>
          <h1>Casillas en el Tablero</h1>
          <p>• El tablero está compuesto por 3 tipos de casillas: verde (minijuego), azul (ganar monedas) y rojo (perder monedas).</p>
          <p>• Al caer en una casilla verde, se activará un minijuego al azar, cuyo ganador obtendrá 1 estrella.</p>
        </div>
        <div>
          <h1>Minijuegos</h1>
          <p>• Mini torneo de Card Jitsu.</p>
          <p></p>
          <p>• Flappy Bird.</p>
          <p></p>
          <p>• Pro Reflex.</p>
        </div>
        <div>
          <h1>Estrellas y Victoria</h1>
          <p>• Completar una vuelta alrededor del tablero otorga al respectivo jugador 1 estrella.</p>
          <p>• Ganar un minijuego otorgará 1 estrella.</p>
          <p>• El juego tiene un límite de 10 rondas. El jugador con más estrellas al final de estas gana.</p>
          <p>• Si un jugador alcanza 5 estrellas antes de la ronda 10, gana automáticamente.</p>
        </div>
        <div>
          <h1>Sistema de Cuentas</h1>
          <p>• Para crear una partida, los jugadores deben registrarse o iniciar sesión en la plataforma.</p>
          <p>• Jugadores no registrados únicamente pueden unirse a partidas.</p>
        </div>
        <div>
          <h1>Roles de Administrador</h1>
          <p>• Detallar permisos.</p>
        </div>
      </Carousel>
    </Layout>
  )
}

export default Rules;