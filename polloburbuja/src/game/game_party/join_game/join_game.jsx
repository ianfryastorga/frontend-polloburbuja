import Layout from '../../../layout.jsx'
import "./join_game.css"
import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import amongus from '../../../assets/img/among_us.png'
import angrybirds from '../../../assets/img/angry_birds.png'
import baby_yoda from '../../../assets/img/baby_yoda.png';
import patricio from '../../../assets/img/patricio.png';
import steve from '../../../assets/img/steve.png';
import hotdog from '../../../assets/img/hot dog.png';
import clashroyale from '../../../assets/img/clash royale.png';
import bugs from '../../../assets/img/bugs bunny.png';


const characters = [
  {name: 'Among Us', img: amongus},
  {name: 'Angry Birds', img: angrybirds},
  {name: 'Baby Yoda', img: baby_yoda},
  {name: 'Patricio', img: patricio},
  {name: 'Steve', img: steve},
  {name: 'Hot Dog', img: hotdog},
  {name: 'Clash Royale', img: clashroyale},
  {name: 'Bugs Bunny', img: bugs}
]

function JoinGame() {

  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const location = useLocation();
  const id_game = new URLSearchParams(location.search).get('id_game');
  const code = new URLSearchParams(location.search).get('code');

  const [username, setUsername] = useState("");


  const handleCharacterSelection = (character) => {
    setSelectedCharacter(character);
  }



  const CreatePlayerSubmit = async (event) => {
    event.preventDefault();
  
    if (selectedCharacter) {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/players/newplayer`, {
        username: username,
        id_game: id_game,
        avatar: selectedCharacter.name, 
      }).then((response) => {
        console.log('Jugador Creado, Ahora tienes que esperar que otros se unan');
        window.location.href = `/create_game?id_game=${response.data.id_game}&code=${response.data.code}`;
      }).catch((error) => {      
        console.error('Ocurrió un error:', error);
      });
    } else {
      console.log('No character selected');
    }
  }
  

  return (
    <Layout>
      {/* <div lassName='join-container'>
        <h3>Ingresa el código de la sala:</h3>
        <input type='text' placeholder='Código de la sala' className='input-codigo'></input>
        <button type='submit' className='boton-enviar'>Enviar Código</button>
    </div> */}
    <div className='join-container'>
        <form onSubmit={CreatePlayerSubmit}>
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
          <input type="submit" value="CREAR PLAYER" className='gradient-button'/>
        </form>

    </div>
    <div className='character-container'>
      {characters.map((character, index) => (
        <img
          key={index}
          src={character.img}
          alt={character.name}
          onClick={() => handleCharacterSelection(character)}
          className={`character-icon ${selectedCharacter === character ? 'selected' : ''}`}
          />
      ))}
    </div>

      


    {/* <div>
        <a href='/tablero'><button id='test'><h1>Presionar aquí para ver tablero</h1></button></a>
    </div>
    <div>
        <a href='/flappy_bird'><button id='test_2'><h1>Presionar aquí para ver Flappy Bird</h1></button></a>
    </div>

    <div>
        <a href='/pro_reflex'><button id='test_3'><h1>Presionar aquí para ver Pro Reflex</h1></button></a>
    </div> */}
    </Layout>
  )
}

export default JoinGame;