import Layout from '../../../layout.jsx'
import "./play.css"
import axios from 'axios';
import React, { useState } from 'react';

function Play() {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState(""); 
  // const [error, setError] = useState(false);
  // const [msg, setMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/games/newgame`, {
        username: username,
        code: code
      }).then((response) => {
        console.log('Juego Creado, Ahora tienes que esperar que otros se unan');
        window.location.href = '/create_game';
        // setError(false);
        // setMsg('Juego Creado, Ahora tienes que esperar que otros se unan');
      }).catch((error) => {      
      console.error('Ocurrió un error:', error);
      // setError(true); // aquí puede haber más lógica para tratar los errores
      });
    }

  return (
    <Layout>
      <div className="button-container">
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input 
              type="text" 
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Code:
            <input 
              type="text" 
              name="code"
              value={code}
              onChange={e => setCode(e.target.value)}
              required
            />
          </label>
          <input type="submit" value="CREAR PARTIDA" className='gradient-button'/>
        </form>
      </div>
    </Layout>
  );
}

//     <Layout>
//       <div className="button-container">
//         <a href='/create_game'><button className='gradient-button'><h1 className='button-play'>CREAR UNA PARTIDA</h1></button></a>
//         <a href='/join_game'><button className='gradient-button'><h1 className='button-play'>UNIRSE A UNA PARTIDA</h1></button></a>
//       </div>
//     </Layout>
//   )
// }

export default Play;