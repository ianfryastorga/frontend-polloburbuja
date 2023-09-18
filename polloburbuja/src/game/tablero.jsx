import Layout from '../layout.jsx'
import amongus from '../assets/img/among_us.png'
import babyyoda from '../assets/img/baby_yoda.png'
import angrybirds from '../assets/img/angry_birds.png'
import mickeymouse from '../assets/img/mickey_mouse.png'
import moneda from '../assets/img/moneda.png'
import star from '../assets/img/estrella.png'

function Tablero() {

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

  const casillas = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 7; j++) {
      const color = colores[i][j];
      const direccion = direcciones[i][j];

      casillas.push(
        <div className={`casilla ${color}`} id={`casilla-${i}-${j}`}>
          {direccion && <span className="flecha">{direccion}</span>}
        </div>
      );
    }
  }

  return (
    <Layout>
      <div className='contenedor'>
        <div className='tablero'>
          <div className='player' id='jugador1'>
            <h3>Jugador 1</h3>
            <img className="picture" src={amongus} alt="icon"/>
                <div className='puntos'>
                    <div>
                    <img className='icons' src={moneda} alt='icon'/>
                    <p>50</p>
                    <img className='icons' src={star} alt='icon'/>
                    <p>1</p>
                    </div>
                </div>
          </div>
          <div className='player' id='jugador2'>
            <h3>Jugador 2</h3>
            
            <img className="picture" src={babyyoda} alt="icon"/>
            
                <div className='puntos'>
                    <div>
                    <img className='icons' src={moneda} alt='icon'/>
                    <p>43</p>
                    <img className='icons' src={star} alt='icon'/>
                    <p>2</p>
                    </div>
                </div>
            

          </div>
          <div className='player' id='jugador3'>
            <h3>Jugador 3</h3>
            <img className="picture" src={angrybirds} alt="icon"/>
                <div className='puntos'>
                    <div>
                    <img className='icons' src={moneda} alt='icon'/>
                    <p>5</p>
                    <img className='icons' src={star} alt='icon'/>
                    <p>0</p>
                    </div>
                </div>

          </div>
          <div className='player' id='jugador4'>
            <h3>Jugador 4</h3>
            <img className="picture" src={mickeymouse} alt="icon"/>
                <div className='puntos'>
                    <div>
                    <img className='icons' src={moneda} alt='icon'/>
                    <p>25</p>
                    <img className='icons' src={star} alt='icon'/>
                    <p>4</p>
                    </div>
                </div>

          </div>
          {casillas}
        </div>
      </div>
    </Layout>
  );
}

export default Tablero;

