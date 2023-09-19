import Layout from '../layout.jsx'

function Rank() {
  return (
    <Layout>
      <div class="container-rank">
        <h2> Ranking Mejores Jugadores</h2>
        <ol class="lista-rank">
          <li>Pedro 38 victorias</li>
          <li>Pedro 38 victorias</li>
          <li>Pedro 38 victorias</li>
          <li>Pedro 38 victorias</li>
          <li>Pedro 38 victorias</li>
          <li>Pedro 38 victorias</li>
          <li>Pedro 38 victorias</li>
          <li>Pedro 38 victorias</li>
          <li>Pedro 38 victorias</li>
          <li>Pedro 38 victorias</li>
        </ol>

        <ol start="42" class="lista-rank">
          <li> Usuario 2 victorias</li>
        </ol>
      </div>
    </Layout>
  )
}

export default Rank;