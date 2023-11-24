import Layout from '../../layout.jsx'
import React, { useState } from 'react';
import { useEffect } from 'react';
import amongus from '../../assets/img/among_us.png'
import babyyoda from '../../assets/img/baby_yoda.png'
import angrybirds from '../../assets/img/angry_birds.png'
import mickeymouse from '../../assets/img/mickey_mouse.png'
import moneda from '../../assets/img/moneda.png'
import star from '../../assets/img/estrella.png'
import dado from '../../assets/img/dado.png'
import tienda from '../../assets/img/tienda.png'
import patricio from '../../assets/img/patricio.png'
import salir from '../../assets/img/salir.png'
import fuego from   '../../assets/img/fuego.png'
import gandalf from '../../assets/img/gandalf.png'
import toreto from '../../assets/img/toreto.png'
import fantasma from '../../assets/img/fantasma.png'
import Dice1 from '../../assets/img/Dice1.png'
import Dice2 from '../../assets/img/Dice2.png'
import Dice3 from '../../assets/img/Dice3.png'
import Dice4 from '../../assets/img/Dice4.png'
import Dice5 from '../../assets/img/Dice5.png'
import Dice6 from '../../assets/img/Dice6.png'
import axios from 'axios'
import './tablero.css'





function Tablero() {

  const [datosDelTablero, setDatosDelTablero] = useState(null);

  useEffect(() => {
    const obtenerDatosDelTablero = async () => {
      try {
        const response = await axios.get('http://localhost:3000/players/');
        console.log('Respuesta completa de Axios:', response);
  
        // Continúa con la lógica de manejo de datos
        if (Array.isArray(response.data)) {
          setDatosDelTablero(response.data);
        } else {
          console.error('Los datos del tablero no son un array:', response.data);
        }
      } catch (error) {
        console.error('Error al obtener datos del tablero:', error);
      }
    };
  
    obtenerDatosDelTablero();
  }, []);
  

  const colores = [
    ['amarillo', 'azul', 'azul', 'rojo', 'azul', 'verde', 'rojo'],
    ['azul', 'azul', 'verde', 'azul', 'azul', 'rojo', 'rojo'],
    ['rojo', 'azul', 'azul', 'verde', 'azul', 'verde', 'azul'],
    ['amarillo', 'rojo', 'verde', 'azul', 'azul', 'rojo', 'verde'],
  ];

  const direcciones = [
    ['→', '', '', '', '', '', '↓'],
    ['↓', '', '', '', '', '', '←'],
    ['→', '', '', '', '', '', '↓'],
    ['☆', '', '', '', '', '', '←'],
  ];


  const posiciones = [
    { i: 0, j: 0 },
    { i: 0, j: 1 },
    { i: 0, j: 2 },
    { i: 0, j: 3 },
    { i: 0, j: 4 },
    { i: 0, j: 5 },
    { i: 0, j: 6 },
    { i: 1, j: 6 },
    { i: 1, j: 5 },
    { i: 1, j: 4 },
    { i: 1, j: 3 },
    { i: 1, j: 2 },
    { i: 1, j: 1 },
    { i: 1, j: 0 },
    { i: 2, j: 0 },
    { i: 2, j: 1 },
    { i: 2, j: 2 },
    { i: 2, j: 3 },
    { i: 2, j: 4 },
    { i: 2, j: 5 },
    { i: 2, j: 6 },
    { i: 3, j: 6 },
    { i: 3, j: 5 },
    { i: 3, j: 4 },
    { i: 3, j: 3 },
    { i: 3, j: 2 },
    { i: 3, j: 1 },
    { i: 3, j: 0 },

  ];

  const casillas = [];

  const [jugador1Posicion, setJugador1Posicion] = useState(posiciones[0]);
  const [jugador2Posicion, setJugador2Posicion] = useState(posiciones[0]);
  const [jugador3Posicion, setJugador3Posicion] = useState(posiciones[0]);
  const [jugador4Posicion, setJugador4Posicion] = useState(posiciones[0]);



  const jugadores = [
    { id: 'jugador-1', posicion: 'arriba-izquierda', imagen: amongus},
    { id: 'jugador-2', posicion: 'arriba-derecha', imagen: babyyoda},
    { id: 'jugador-3', posicion: 'abajo-izquierda', imagen: angrybirds},
    { id: 'jugador-4', posicion: 'abajo-derecha', imagen: mickeymouse},
  ];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 7; j++) {
      const color = colores[i][j];
      const direccion = direcciones[i][j];

      casillas.push(
        <div className={`casilla ${color}`} id={`casilla-${i}-${j}`}>
          {direccion && <span className="flecha">{direccion}</span>}
          {jugadores.map(jugador => (
            (i === jugador1Posicion.i && j === jugador1Posicion.j) &&
            <img src={jugadores[0].imagen} className={`player-icon ${jugadores[0].posicion}`} id={jugadores[0].id} alt={jugadores[0].id} />
            ))}
           {jugadores.map(jugador => (
            (i === jugador2Posicion.i && j === jugador2Posicion.j) &&
            <img src={jugadores[1].imagen} className={`player-icon ${jugadores[1].posicion}`} id={jugadores[1].id} alt={jugadores[1].id} />
            ))}
           {jugadores.map(jugador => (
            (i === jugador3Posicion.i && j === jugador3Posicion.j) &&
            <img src={jugadores[2].imagen} className={`player-icon ${jugadores[2].posicion}`} id={jugadores[2].id} alt={jugadores[2].id} />
            ))}
          {jugadores.map(jugador => (
            (i === jugador4Posicion.i && j === jugador4Posicion.j) &&
            <img src={jugadores[3].imagen} className={`player-icon ${jugadores[3].posicion}`} id={jugadores[3].id} alt={jugadores[3].id} />
            ))}
        </div>
      );
    }
  }

  var diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  const [interfaz, setInterfaz] = useState('normal');
  
  const [image, setImage] = useState(diceImages[0]);

  const [dadoVisible, setDadoVisible] = useState(true);

  const [rollingDice, setRollingDice] = useState(false);

  const [timer, setTimer] = useState(20); 

  const [timerActive, setTimerActive] = useState(false); 

  const [ultimoResultadoDado, setUltimoResultadoDado] = useState(null);

  const [jugadorActual, setJugadorActual] = useState(1);

  const [dadoLanzado, setDadoLanzado] = useState(false);

  const siguienteJugador = () => {
    setJugadorActual(jugadorActual % 4 + 1);
    setDadoLanzado(false);
  };

  const handleTiendaClick = () => {
    setInterfaz('potenciadores');
  };

  const handleDadoClick = () => {
    setRollingDice(true);
    if (!dadoLanzado) {
      setDadoLanzado(true);

      let randomNum;
    
      let animationTimeout = setTimeout(() => {
        let interval = setInterval(() => {
          randomNum = Math.floor(Math.random() * 6);
          setImage(diceImages[randomNum]);
          console.log(randomNum);
        }, 100);
    
        setTimeout(() => {
          clearInterval(interval);
          setRollingDice(false);

        setUltimoResultadoDado(randomNum); 

        if (jugadorActual === 1) {

          setJugador1Posicion((prevPosicion) => {
            let nuevaPosicion = prevPosicion.i * 7 + prevPosicion.j + randomNum + 1;
            if (nuevaPosicion >= 29) {
              nuevaPosicion = randomNum - (28 - (prevPosicion.i * 7 + prevPosicion.j + 1));
            }
            return posiciones[nuevaPosicion];
          });
          
        } else if (jugadorActual === 2) {

          setJugador2Posicion((prevPosicion) => {
            let nuevaPosicion = prevPosicion.i * 7 + prevPosicion.j + randomNum + 1;
            if (nuevaPosicion >= 29) {
              nuevaPosicion = randomNum - (28 - (prevPosicion.i * 7 + prevPosicion.j + 1));
            }
            return posiciones[nuevaPosicion];
          });

        } else if (jugadorActual === 3) {

          setJugador3Posicion((prevPosicion) => {
            let nuevaPosicion = prevPosicion.i * 7 + prevPosicion.j + randomNum + 1;
            if (nuevaPosicion >= 29) {
              nuevaPosicion = randomNum - (28 - (prevPosicion.i * 7 + prevPosicion.j + 1));
            }
            return posiciones[nuevaPosicion];
          });
        } else if (jugadorActual === 4) {

          setJugador4Posicion((prevPosicion) => {
            let nuevaPosicion = prevPosicion.i * 7 + prevPosicion.j + randomNum + 1;
            if (nuevaPosicion >= 29) {
              nuevaPosicion = randomNum - (28 - (prevPosicion.i * 7 + prevPosicion.j + 1));
            }
            return posiciones[nuevaPosicion];
          });
        }
          setTimerActive(true);
          setTimer(20);
    
          const countdownInterval = setInterval(() => {
            setTimer((prevTimer) => {
              if (prevTimer > 0) {
                return prevTimer - 1;
              } else {
                clearInterval(countdownInterval);
                setTimerActive(false);
                siguienteJugador();
                return prevTimer;
              }
            });
          }, 1000);
        }, 3000); 
      }, 2000); 
    };
  }; 

  
  const handleSalirClick = () => {
    setInterfaz('normal');
  };


  return (
    <Layout>
    <div className='contenedor'>
      <div className='tablero'>
        {/* Renderiza jugadores y casillas */}
        {datosDelTablero && (
        datosDelTablero.map((jugador, index) => (
          <div className='player' id={`jugador${index + 1}`}>
            <h3>{`Jugador ${index + 1}`}</h3>
            <img className='picture' src={jugadores[index].imagen} alt='icon' />
            <div className='puntos'>
              <div>
                <img className='icons' src={moneda} alt='icon' />
                <p>{jugador.monedas}</p>
                <img className='icons' src={star} alt='icon' />
                <p>{jugador.estrellas}</p>
              </div>
            </div>
          </div>
        ))
      )}

        {/* Renderiza casillas */}
        {casillas}
      </div>

      <div className='interfaz'>
        {/* Renderiza la interfaz normal */}
        {interfaz === 'normal' && (
          <>
            <div className='turno'>
              <h3>Turno de Jugador {jugadorActual}</h3>
            </div>

            <div className='overlay'>
              <img className='dado' src={dado} alt='dado' onClick={handleDadoClick} />
              <span className='overlay-text'>DADO</span>
            </div>

            <div className='overlay'>
              <img className='tienda' src={tienda} alt='tienda' onClick={handleTiendaClick} />
              <span className='overlay-text'>TIENDA</span>
            </div>

            <div className={`timer ${timer <= 10 ? 'warning' : ''}`}>
              {timer}
            </div>
          </>
        )}

        {/* Renderiza la interfaz de potenciadores */}
        {interfaz === 'potenciadores' && (
          <>
            {/* Renderiza potenciadores */}
            {potenciadores.map((potenciador, index) => (
              <div className='overlay' key={`potenciador-${index}`}>
                <img className={potenciador.clase} src={potenciador.imagen} alt={potenciador.alt} />
                <span className='overlay-text'>{`${potenciador.moneda} MONEDAS`}</span>
              </div>
            ))}

            {/* Renderiza botón para salir */}
            <div className='overlay'>
              <img className='salir' src={salir} alt='salir' onClick={handleSalirClick} />
              <span className='overlay-text'>SALIR</span>
            </div>
          </>
        )}
      </div>
    </div>
  </Layout>
  );
}

export default Tablero;

