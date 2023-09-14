import { useState } from 'react'
import './App.css'
import icono from './assets/chicken.png'

function App() {
  return (
    <>
      <div className='fondo'>
        <nav>
          <ul>
          <li><button>HOME</button></li>
            <li><button>RULES</button></li>
            <li><button>PLAY</button></li>
            <li><button>ABOUT US</button></li>
            <li><button>RANK</button></li>
            <li><button>LOGIN</button></li>
            <li><button>REGISTER</button></li>
          </ul>
        </nav>
      <div className='centro'>
        <h1>¡BIENVENIDO AL JUEGO POLLOBURBUJA!</h1>

        <img src={icono} alt="icono"/>
      </div>
      </div>
    </>
  );
}

export default App
