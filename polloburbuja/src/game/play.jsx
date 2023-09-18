import Layout from '../layout.jsx'

function Play() {
  return (
    <Layout>
      <div className="button-container">
        <a href='/create_game'><button className='gradient-button'><h1>CREAR UNA PARTIDA</h1></button></a>
        <a href='/join_game'><button className='gradient-button'><h1>UNIRSE A UNA PARTIDA</h1></button></a>
      </div>
    </Layout>
  )
}

export default Play;