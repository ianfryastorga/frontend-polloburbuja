import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Layout from '../layout.jsx'

function Rules() {
  return (
    <Layout>
      <Carousel showThumbs={false} showStatus={false}>
        <div>
          <p>HOLA MUNDO</p>
          <img className="carousel-image" src="src\assets\img\among_us.png" />
        </div>
        <div>
          <img className="carousel-image" src="src\assets\img\baby_yoda.png" />
        </div>
        <div>
          <img className="carousel-image" src="src\assets\img\mickey_mouse.png" />
        </div>
      </Carousel>
    </Layout>
  )
}

export default Rules;