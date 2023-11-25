import Layout from '../../../layout.jsx'
import "./join_game.css"
import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


function JoinGame() {
  const location = useLocation();
  const id_game = new URLSearchParams(location.search).get('id_game');
  const code = new URLSearchParams(location.search).get('code');

  const [username, setUsername] = useState("");
  const [createcode, setCreateCode] = useState("");


  const CreatePlayerSubmit = async (event) => {
    event.preventDefault();

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/players/newplayer`, {
        username: username,
        id_game: id_game
      }).then((response) => {
        console.log('Jugador Creado, Ahora tienes que esperar que otros se unan');
        window.location.href = `/create_game?id_game=${response.data.id_game}&code=${response.data.code}`;
      }).catch((error) => {      
      console.error('Ocurrió un error:', error);
      });
    }


  return (
    <Layout>
      <div className='join-container'>
        <h3>Ingresa el código de la sala:</h3>
        <input type='text' placeholder='Código de la sala' className='input-codigo'></input>
        <button type='submit' className='boton-enviar'>Enviar Código</button>
    </div>
    <div>
        <a href='/tablero'><button id='test'><h1>Presionar aquí para ver tablero</h1></button></a>
    </div>
    <div>
        <a href='/flappy_bird'><button id='test_2'><h1>Presionar aquí para ver Flappy Bird</h1></button></a>
    </div>

    <div>
        <a href='/pro_reflex'><button id='test_3'><h1>Presionar aquí para ver Pro Reflex</h1></button></a>
    </div>
    </Layout>
  )
}

export default JoinGame;