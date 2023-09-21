import Layout from '../../../layout.jsx'
import "./play.css"

function Play() {
  return (
    <Layout>
      <div className="button-container">
        <a href='/create_game'><button className='gradient-button'><h1 className='button-play'>CREAR UNA PARTIDA</h1></button></a>
        <a href='/join_game'><button className='gradient-button'><h1 className='button-play'>UNIRSE A UNA PARTIDA</h1></button></a>
      </div>
    </Layout>
  )
}

export default Play;