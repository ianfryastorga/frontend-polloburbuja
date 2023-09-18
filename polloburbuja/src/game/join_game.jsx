import Layout from '../layout.jsx'

function JoinGame() {
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
    </Layout>
  )
}

export default JoinGame;