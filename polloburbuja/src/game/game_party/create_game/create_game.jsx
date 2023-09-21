import Layout from '../../../layout.jsx'
import loading from '../../../assets/img/loading.png'
import amongus from '../../../assets/img/among_us.png'
import "./create_game.css"

function CreateGame() {
  return (
    <Layout>
    <div className="jugador" id="jugador1">
    <h3>Jugador 1</h3>
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
    <p>aquí irá el código</p>

    </div>  
    </Layout>
  )
}

export default CreateGame;