import Layout from '../../../layout.jsx'
import loading from '../../../assets/img/loading.png'
import amongus from '../../../assets/img/among_us.png'
import "./create_game.css"
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function CreateGame() {
  const location = useLocation();
  const id_game = new URLSearchParams(location.search).get('id_game');
  const code = new URLSearchParams(location.search).get('code');

  const [players, setPlayers] = useState(null);

  useEffect(() => {
    // Función para hacer la solicitud al servidor
    const fetchData = async () => {
      try {
        // Cambia la URL a la que deseas hacer la solicitud
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/datagame/${id_game}`);
        // Actualiza el estado con los datos obtenidos
        const data = response.data;
        const players = {};
        data.Players.map((player) => {
          players[player.id] = player;
        });
        setPlayers(players);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    // Llama a la función cuando el componente se monta
    fetchData();
  }, [id_game]); // La dependencia [] asegura que la solicitud se realice solo una vez al montar el componente


  return (
    <Layout>
    <div className="jugador" id="jugador1">
    <h3>Esperando...</h3>
    <img id='amongus' src={amongus} alt="icon"/>

    </div>
    
    <div className="jugador" id="jugador2">
    <h3>Esperando...</h3>
    <img id='loading' src={loading} alt="loading"/>
    </div>
    
    <div className="jugador" id="jugador3">
    <h3>Esperando...</h3>
    <img id='loading' src={loading} alt="loading"/>


    </div>
    
    <div className="jugador" id="jugador4">
    <h3>Esperando...</h3>
    <img id='loading' src={loading} alt="loading"/>


    </div>  
    <div className="jugador" id="centro">
    <h3>Código de Sala</h3>
    <p> {code} </p>

    </div>  
    </Layout>
  )
}

export default CreateGame;