import React, { useEffect } from 'react';
import Layout from '../../../layout.jsx'
import './flappy_bird.css'; 

const FlappyBird = () => {
  useEffect(() => {
    const board = document.getElementById('board');
    const boardWidth = 800;
    const boardHeight = 640;
    const context = board.getContext('2d');

    let birdX = boardWidth / 8;
    let birdY = boardHeight / 2;
    let birdWidth = 34;
    let birdHeight = 24;

    let birdImg = new Image();
    birdImg.src = 'src/game/minigames/flappy_bird/flappybird.png';

    let pipeArray = [];
    let pipeWidth = 64;
    let pipeHeight = 512;
    let pipeX = boardWidth;
    let pipeY = 0;

    let topPipeImg = new Image();
    topPipeImg.src = 'src/game/minigames/flappy_bird/toppipe.png';

    let bottomPipeImg = new Image();
    bottomPipeImg.src = 'src/game/minigames/flappy_bird/bottompipe.png';

    let velocityX = -2;
    let velocityY = 0;
    let gravity = 0.4;

    let gameOver = false;
    let score = 0;

    const update = () => {
        requestAnimationFrame(update);
        if (gameOver) {
          return;
        }
        context.clearRect(0, 0, board.width, board.height);
 
        velocityY += gravity;
        birdY = Math.max(birdY + velocityY, 0);
        context.drawImage(birdImg, birdX, birdY, birdWidth, birdHeight);
      
        if (birdY > boardHeight) {
          gameOver = true;
        }
      
        for (let i = 0; i < pipeArray.length; i++) {
          let pipe = pipeArray[i];
          pipe.x += velocityX; 
          context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
      
          if (!pipe.passed && birdX > pipe.x + pipe.width) {
            score += 0.5;
            pipe.passed = true;
          }
      
          if (detectCollision(
            { x: birdX, y: birdY, width: birdWidth, height: birdHeight },
            { x: pipe.x, y: pipe.y, width: pipe.width, height: pipe.height }
          )) {
            gameOver = true;
          }
        }
      
        while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
          pipeArray.shift();
        }
      
        context.fillStyle = "white";
        context.font = "45px sans-serif";
        context.fillText(score, 5, 45);
      
        if (gameOver) {
          context.fillText("GAME OVER", 5, 90);
        }
    };
    

      const placePipes = () => {
        if (gameOver) {
          return;
        }
      
        let randomPipeY = pipeY - pipeHeight / 4 - Math.random() * (pipeHeight / 2);
        let openingSpace = boardHeight / 4;
      
        let topPipe = {
          img: topPipeImg,
          x: boardWidth,
          y: randomPipeY,
          width: pipeWidth,
          height: pipeHeight,
          passed: false,
        };
        pipeArray.push(topPipe);
      
        let bottomPipe = {
          img: bottomPipeImg,
          x: boardWidth,
          y: randomPipeY + pipeHeight + openingSpace,
          width: pipeWidth,
          height: pipeHeight,
          passed: false,
        };
        pipeArray.push(bottomPipe);
      };
      
      

    const moveBird = (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp') {
        velocityY = -6;
        if (gameOver) {
        birdY = boardHeight / 2; 
        pipeArray = [];
        score = 0;
        gameOver = false;
        }
    }
    }; 

    const detectCollision = (a, b) => {
      return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
      );
    };

    birdImg.onload = () => {
      requestAnimationFrame(update);
      setInterval(placePipes, 1500);
      document.addEventListener('keydown', moveBird);
    };

    return () => {
      document.removeEventListener('keydown', moveBird);
    };
  }, []);

  return (
    <Layout>
    <canvas id="board" width={800} height={640}>
    </canvas>
    </Layout>
  );
};

export default FlappyBird;
