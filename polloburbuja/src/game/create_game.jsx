import Layout from '../layout.jsx'
import loading from '../assets/img/loading.png'
import amongus from '../assets/img/among_us.png'


function CreateGame() {
  return (
    <Layout>
    <div className="jugador en espera" id="jugador1">
    <h3>Jugador 1</h3>
    <img id='amongus' src={amongus} alt="icon"/>

    </div>
    
    <div className="jugador en espera" id="jugador2">
    <h3>Esperando...</h3>
    <img id='loading' src={loading} alt="loading"/>
    </div>
    
    <div className="jugador en espera" id="jugador3">
    <h3>Esperando...</h3>
    <img id='loading' src={loading} alt="loading"/>


    </div>
    
    <div className="jugador en espera" id="jugador4">
    <h3>Esperando...</h3>
    <img id='loading' src={loading} alt="loading"/>


    </div>  
    <div className="jugador en espera" id="centro">
    <h3>Código de Sala</h3>
    <p>aquí irá el código</p>

    </div>  
    </Layout>
  )
}

export default CreateGame;