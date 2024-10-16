import { subscriptionKey, region } from './config.js'; 


document.addEventListener("DOMContentLoaded", () => {
  const scoreDisplay = document.getElementById("score");
  const width = 28;
  let score = 0;
  const grid = document.querySelector(".grid");
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 1, 1, 3, 0, 0, 0, 1, 1, 1, 5, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 0, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 1, 4, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 4, 1, 2, 2, 2, 2, 1, 4, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 1, 4, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 1, 4, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 4, 1, 2, 2, 2, 2, 1, 4, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 1, 4, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 1, 1, 3, 0, 0, 0, 1, 1, 1, 5, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ];
  

  


  const squares = [];

  const directions = [
    ['left', 'west', 'westward']
    ['right', 'east'],
    ['up', 'north', 'top'],
    ['down', 'south', 'bottom']
    // general directions
    ['straight', 'forward', 'ahead']
  ];  

  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);
      squares.push(square);

      if (layout[i] === 0) {
        squares[i].classList.add("pac-dot");
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall");
      } else if (layout[i] === 2) {
        squares[i].classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        squares[i].classList.add("power-pellet");
      }
      else if (layout[i] === 5) {
        squares[i].classList.add("safe-zone");
      } 
    }
  }
  createBoard();



  let lives = 3; 
  let isPaused = false; 
  let gameStarted = false;
  let pacmanInterval;
  let isMoving = false;
  let pacmanCurrentIndex = 574;
  let pacmanspeed = 100;
  let pacmanVelocity = {x: 0, y: 0,};
  let intendedDirection = {x: 0, y: 0,};
  squares[pacmanCurrentIndex].classList.add("pac-man");




  function restartGame(resetLives) {
    score = 0;
    if(resetLives){ 
      lives = 3; 
      document.getElementById("heart1").style.display = "grid";
      document.getElementById("heart2").style.display = "grid";
      document.getElementById("heart3").style.display = "grid";
    }
    pacmanCurrentIndex = 574;
    pacmanVelocity = {x: 0, y: 0};
    intendedDirection = {x: 0, y: 0};
    isMoving = false;
    isPaused = false;
  
    grid.innerHTML = "";
    squares.length = 0; 
    squares.forEach(square => {
      square.classList.remove("pac-man", "wall", "ghost-lair", "pac-dot", "power-pellet", "ghost", "scared-ghost", "safe-zone");
    });

    createBoard();
  
    squares[pacmanCurrentIndex].classList.add("pac-man");
    ghosts.forEach(ghost => {
      squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost");
      ghost.currentIndex = ghost.startIndex;
      squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
    });
  
    scoreDisplay.innerHTML = score;

    document.getElementById("game-over-screen").style.display = "none";
    document.getElementById("round-loss-screen").style.display = "none";
    document.getElementById("you-won-screen").style.display = "none";
  
    startGame();
    console.log("Game Restarted");
  }

  


  function handleVoiceCommand(command) {
    command = command.toLowerCase();
    const commands = command.split(" "); 
    
    commands.forEach((cmd) => {
      if (cmd.includes("left")) {
        isMoving = true;
        intendedDirection = { x: -1, y: 0 };
      } if (cmd.includes("right")) {
        isMoving = true;
        intendedDirection = { x: 1, y: 0 };
      } if (cmd.includes("north") || cmd.includes("up")) {
        isMoving = true;
        intendedDirection = { x: 0, y: -1 };
      } if (cmd.includes("south") || cmd.includes("down")) {
        isMoving = true;
        intendedDirection = { x: 0, y: 1 };
      } if (cmd.includes("stop")) {
        isMoving = false;
       
      } if (cmd.includes("start")) {
          if (!gameStarted){
            startGame();
          }
      }
      if (cmd.includes("pause")) {
        if (gameStarted) togglePause(0);
      } 
      if (cmd.includes("continue")) {
        if (gameStarted) togglePause(1);
      }
      if (cmd.includes("restart") || cmd.includes("reset")) {
        restartGame(); 
      }
    });
  }
  


  function togglePause(identifier) {
    if (identifier === 0){ 
      isPaused = true;
    }
    else if (identifier === 1){
      isPaused = false;
    }
    if (isPaused) {
      document.getElementById("game").style.display = "none";
      document.getElementById("pause-screen").style.display = "flex";  
      document.getElementById("health").style.display = "none";
      document.getElementById("health").style.display = "flex";

      console.log("Game Paused");
    } else if (!isPaused) {
      document.getElementById("health").style.display = "none";
      document.getElementById("health").style.display = "grid";
      document.getElementById("game").style.display = "flex";
      document.getElementById("pause-screen").style.display = "none";
      console.log("Game Resumed");
    }
  }
  


  function canMoveTo(newIndex) {
    return (
      !squares[newIndex].classList.contains("wall") &&
      !squares[newIndex].classList.contains("ghost-lair")
    );
  }

  function movePacman() {
    if (pacmanInterval)clearInterval(pacmanInterval);
  
    pacmanInterval = setInterval(() => {
      if (!isPaused && isMoving) {  
        const nextIndex = pacmanCurrentIndex + pacmanVelocity.y * width + pacmanVelocity.x;
        const intendedNextIndex = pacmanCurrentIndex + intendedDirection.y * width + intendedDirection.x;
    
        if (canMoveTo(intendedNextIndex)) {
          pacmanVelocity = { ...intendedDirection }; 
          squares[pacmanCurrentIndex].classList.remove("pac-man");
          pacmanCurrentIndex = intendedNextIndex;
        } else if (canMoveTo(nextIndex)) {
          squares[pacmanCurrentIndex].classList.remove("pac-man");
          pacmanCurrentIndex = nextIndex; 
        }
    
        squares[pacmanCurrentIndex].classList.add("pac-man");
    
        pacDotEaten();
        powerPelletEaten();
        checkForGhostCollision();
      }
    }, pacmanspeed);
  }
  
  


    function pacDotEaten() {
      if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
        score++;

        const scoreElement = document.getElementById("score");
        scoreElement.classList.remove("low-score", "mid-score", "high-score");

        if (score < 50) {
          scoreElement.classList.add("low-score");
        } else if (score < 150) {
          scoreElement.classList.add("mid-score");
        } else if (score > 200) {
          scoreElement.classList.add("high-score");
        }
        scoreDisplay.innerHTML = score;
        squares[pacmanCurrentIndex].classList.remove("pac-dot");
        checkForWin();
      }
    }

   
    function powerPelletEaten() {
      if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
        score += 10;
        ghosts.forEach((ghost) => (ghost.isScared = true));
        setTimeout(unScareGhosts, 10000);
        squares[pacmanCurrentIndex].classList.remove("power-pellet");
        checkForWin();
      }
    }

    function unScareGhosts() {
      ghosts.forEach((ghost) => (ghost.isScared = false));
    }

    class Ghost {
      constructor(className, startIndex, speed) {
        this.className = className;
        this.startIndex = startIndex;
        this.speed = speed;
        this.currentIndex = startIndex;
        this.isScared = false;
        this.timerId = NaN;
      }
    }

    var ghosts = [
      new Ghost("blinky", 348, 400),
      new Ghost("stinky", 376, 400),
      new Ghost("inky", 351, 300),
      new Ghost("clyde", 379, 300),
    ];

    ghosts.forEach((ghost) => {
      squares[ghost.currentIndex].classList.add(ghost.className);
      squares[ghost.currentIndex].classList.add("ghost");
    });

    function moveGhost(ghost) {
      const directions = [-1, +1, width, -width]; 
      let direction = directions[Math.floor(Math.random() * directions.length)]; 
    
      if (ghost.timerId) clearInterval(ghost.timerId); 
    
      ghost.timerId = setInterval(function () {
        if (!isPaused) {
          const nextIndex = ghost.currentIndex + direction;
    
          if (
            !squares[nextIndex].classList.contains("ghost") &&
            !squares[nextIndex].classList.contains("wall") &&
            !squares[nextIndex].classList.contains("safe-zone")
          ) {
            squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost");
            ghost.currentIndex = nextIndex;
            squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
    
            if (ghost.isScared) {
              squares[ghost.currentIndex].classList.add("scared-ghost");
            }
          } else {
            direction = directions[Math.floor(Math.random() * directions.length)];
          }
    
          checkForGhostCollision();
        }
      }, ghost.speed);
    }
    

   
    function loseLife() {
      if (lives > 1) {
        document.getElementById('heart' + lives).style.display = "none";
        lives--;
    
        document.getElementById("round-loss-screen").style.display = "flex";
        squares[pacmanCurrentIndex].classList.remove("pac-man");

        isMoving = false; 
    
        setTimeout(() => {
          document.getElementById("round-loss-screen").style.display = "none";
          restartGame(false); 
        }, 3000);
      }
       else {
        triggerGameOver();
      }
    }


    function triggerGameOver() {
      isMoving = false; 
      document.getElementById("health").style.display = "none";
      document.getElementById("game-over-screen").style.display = "flex";
      squares[pacmanCurrentIndex].classList.remove("pac-man");

      
    
      setTimeout(() => {
        restartGame(true); 
      }, 3000);
    }


    
  function checkForGhostCollision() {
    if (squares[pacmanCurrentIndex].classList.contains("ghost") &&
      !squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {

      ghosts.forEach(ghost => clearInterval(ghost.timerId));
      pacmanVelocity = { x: 0, y: 0 };
      isMoving = false;

      loseLife();
    }
    else if (squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {
      ghosts.forEach((ghost) => {
        if (ghost.currentIndex === pacmanCurrentIndex) {
          if (ghost.isScared) {

            squares[ghost.currentIndex].classList.remove(
              ghost.className,
              "ghost",
              "scared-ghost"
            );

            ghost.currentIndex = ghost.startIndex; 
            squares[ghost.currentIndex].classList.add(ghost.className, "ghost");

            ghost.isScared = false;
          }
        }
      });
    }

  }


    function checkForWin() {
      if (score >= 274) {
        ghosts.forEach((ghost) => clearInterval(ghost.timerId));
        document.removeEventListener("keyup", movePacman);
        pacmanVelocity.x = 0;
        pacmanVelocity.y = 0;
    
        document.getElementById("you-won-screen").style.display = "flex";
        setTimeout(function () {
          window.location.reload();
        }, 3000);
      }
    }

    function startGame(event) {
      gameStarted = true;
      document.getElementById("start-screen").style.display = "none";
      document.getElementById("health").style.display = "grid";
      isMoving = true;
      movePacman();
      ghosts.forEach((ghost) => moveGhost(ghost));
    }
  


    document.addEventListener("click", () => {
      initializeMicrophone();
      startGame();
    });

  

  function initializeMicrophone() {

    const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, region);

    speechConfig.speechRecognitionLanguage = "en-US"; 
    speechConfig.setProperty(SpeechSDK.PropertyId.SpeechServiceConnection_RecoLanguage, "en-US");


    const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();

    const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

    recognizer.recognizing = (s, e) => {
      if (e.result.reason === SpeechSDK.ResultReason.RecognizingSpeech) {
        handleVoiceCommand(e.result.text); 
        console.log(e.result.text);
      } else if (e.result.reason === SpeechSDK.ResultReason.NoMatch) {
        console.log("No speech recognized.");
      }
    };
      
    recognizer.startContinuousRecognitionAsync();
  }
});



