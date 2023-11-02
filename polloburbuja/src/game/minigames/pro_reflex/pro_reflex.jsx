import React, { useEffect, useState } from 'react';
import './pro_reflex.css';
import Layout from '../../../layout.jsx';



const ProReflex = () => {
  const [score, setScore] = useState(0);
  const [objectPosition, setObjectPosition] = useState(getRandomPosition());
  const [velocity, setVelocity] = useState({ x: 20, y: 16 });
  const [gameOver, setGameOver] = useState(false);

  function getRandomPosition() {
    let x = Math.random() * (800 - 50);
    let y = Math.random() * (640 - 50);

    return { x, y };
  }

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => {
        let newPosition = { 
          x: objectPosition.x + velocity.x,
          y: objectPosition.y + velocity.y
        };
        if (newPosition.x < 0 || newPosition.x > 800 - 50) {
          setVelocity(v => ({ ...v, x: -v.x }));
        } else if (newPosition.y < 0 || newPosition.y > 640 - 50) {
          setVelocity(v => ({ ...v, y: -v.y }));
        } else {
          setObjectPosition(newPosition);
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [objectPosition, velocity, gameOver]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        const circleElement = document.getElementById('circle');
        const circleRect = circleElement.getBoundingClientRect();
    
        let dx = objectPosition.x + 25 - (circleRect.left + 50);
        let dy = objectPosition.y + 25 - (circleRect.top + 50);
        let distance = Math.sqrt(dx * dx + dy * dy);
    
        if (distance < 75) {
          let theta = Math.acos(distance / 75) * 2;
          let areaOverlap = 0.5 * (theta - Math.sin(theta)) * (75 * 75);
          let scoreIncrement = areaOverlap / (Math.PI * 25 * 25);
          setScore(scoreIncrement / (Math.PI)); 
        } else {
          setScore(0);
        }
    
        setGameOver(true);
      }
    };
  
  

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [objectPosition]);

  return (
    <Layout>
      <div className="game_container">
        <div id='circle' className='circle' />
        <div
          style={{
            top: `${objectPosition.y}px`,
            left: `${objectPosition.x}px`,
            backgroundColor: gameOver ? 'green' : 'blue',
          }}
          className='object'
        />
        <p>Puntuación: {score.toFixed(2)}</p>
      </div>
    </Layout>
  );
};

export default ProReflex;