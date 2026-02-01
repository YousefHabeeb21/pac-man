// import { subscriptionKey, region } from './config.js'; 


document.addEventListener("DOMContentLoaded", () => {
  const scoreDisplay = document.getElementById("score");
  const width = 28;
  let score = 0;
  const grid = document.querySelector(".grid");
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 1, 1, 3, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 3, 0, 0, 1,
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
    1, 0, 0, 0, 0, 1, 1, 3, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 3, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ];
  

  const squares = [];

  function createBoard() {
    const fragment = document.createDocumentFragment();
  
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      fragment.appendChild(square); 
      squares.push(square);
  
      if (layout[i] === 0) {
        square.classList.add("pac-dot");
      } else if (layout[i] === 1) {
        square.classList.add("wall");
      } else if (layout[i] === 2) {
        square.classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        square.classList.add("power-pellet");
      } else if (layout[i] === 5) {
        square.classList.add("safe-zone");
      }
    }
      grid.appendChild(fragment);
  }

  createBoard();
  let chosenDifficulty = "Medium";
  let lastdirection;
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




  function screensReset(){
    showElement("start-screen");
    hideElement("help-screen");
    hideElement("health");
  }


  function restartGame(resetLives) {
    hideElement("cmd");
    pacmanCurrentIndex = 574;
    pacmanVelocity = {x: 0, y: 0};
    intendedDirection = {x: 0, y: 0};
    isMoving = false;
    isPaused = false;
    squares[pacmanCurrentIndex].classList.add("pac-man");


    ghosts.forEach(ghost => {
      squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost");
      ghost.currentIndex = ghost.startIndex;
      squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
    });

    if(resetLives){ 

      gameStarted = false;
      lives = 3; 
      showElement("heart1");
      showElement("heart2");
      showElement("heart3");

      grid.innerHTML = "";
      squares.length = 0; 
  
      createBoard();
    
      score = 0;
      scoreDisplay.innerHTML = score;
  
      screensReset()
    } 
    else{

      isMoving = true;
      movePacman();
      ghosts.forEach((ghost) => moveGhost(ghost));
     
    }
  }

  
  function displayCmd(cmd) {
    const cmdElement = document.getElementById("cmd");
    if (cmd === "keep" || cmd === "go"){
      cmdElement.innerHTML = "keep going";
      cmdElement.style.display = "inline";
    }
    else{
    cmdElement.innerHTML = cmd;  
    cmdElement.style.display = "inline"; 
    }
  }

  const commandMap = {
    left: () => { intendedDirection = { x: -1, y: 0 }; isMoving = true; },
    west: () => { intendedDirection = { x: -1, y: 0 }; isMoving = true; },
    right: () => { intendedDirection = { x: 1, y: 0 }; isMoving = true; },
    east: () => { intendedDirection = { x: 1, y: 0 }; isMoving = true; },
    up: () => { intendedDirection = { x: 0, y: -1 }; isMoving = true; },
    north: () => { intendedDirection = { x: 0, y: -1 }; isMoving = true; },
    down: () => { intendedDirection = { x: 0, y: 1 }; isMoving = true; },
    south: () => { intendedDirection = { x: 0, y: 1 }; isMoving = true; },
    stop: () => { lastdirection = intendedDirection; isMoving = false; },
    go: () => { if (!isMoving) { intendedDirection = lastdirection; isMoving = true; } },
    keep: () => { if (!isMoving) { intendedDirection = lastdirection; isMoving = true; } },
    start: () => { if (!gameStarted) startGame(); },
    begin: () => { if (!gameStarted) startGame(); },
    pause: () => { if (gameStarted) togglePause(0); },
    resume: () => { if (gameStarted) togglePause(1); },
    continue: () => { if (gameStarted) togglePause(1); },
    restart: () => restartGame(true),
    reset: () => restartGame(true),
    help: () => getHelp(gameStarted ? 0 : 1),
    instructions: () => getHelp(gameStarted ? 0 : 1),
    directions: () => getHelp(gameStarted ? 0 : 1),
    easy: () => { updateDifficulty("Easy"); applyDifficultySettings("Easy"); },
    medium: () => { updateDifficulty("Medium"); applyDifficultySettings("Medium"); },
    hard: () => { updateDifficulty("Hard"); applyDifficultySettings("Hard"); },
  };
  
  
  function handleVoiceCommand(command) {
    command = command.toLowerCase();
    const words = command.split(" ");
  
    words.forEach((word) => {
      if (commandMap[word]) {
        if (!["easy", "medium", "hard"].includes(word)) {
          displayCmd(word);
        }
        commandMap[word]();
      }
    });
  }
  

  function getHelp(identifier) {
    if (identifier === 0) {
      isPaused = true;
      hideElement('pause-screen');
      showElement("help-screen");
      hideElement("screen");
    } 
    else if (identifier === 1) {
      showElement("help-screen");
    }
  }

  function togglePause(identifier) {
    if (identifier === 0){ 
      isPaused = true;
    }
    else if (identifier === 1){
      isPaused = false;
    }
    if (isPaused) {
      document.getElementById("current-score").textContent = score;
      document.getElementById("remaining-lives").textContent = lives;
      document.getElementById("diff").textContent = chosenDifficulty;
      hideElement("screen");
      hideElement("help-screen");
      showElement("pause-screen");  
      hideElement("health");
      console.log("Game Paused");

    } else if (!isPaused) {
      showElement("health");
      hideElement('help-screen');
      showElement("screen");
      hideElement('pause-screen');
      console.log("Game Resumed");
    }
  }
  


  function canMoveTo(newIndex) {
    if (squares[newIndex].classList.contains("wall") || squares[newIndex].classList.contains("ghost-lair")) {
      return false;
    }
    return true;
  }

  function movePacman() {
    if (pacmanInterval)clearInterval(pacmanInterval);
  
    pacmanInterval = setInterval(() => {
      if (!isPaused && isMoving) {  
        if(squares[pacmanCurrentIndex].classList.contains("safe-zone")){
          showElement("game-message");
        }else{
         hideElement("game-message");
        }
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
        // clearTimeout(unScareGhosts.timerId); 
        // unScareGhosts.timerId = setTimeout(unScareGhosts, 10000);
        clearTimeout(unScareGhosts.timerId);
        let countdown = 10;
        console.log(`Ghosts will be unscared in ${countdown} seconds`);

        unScareGhosts.timerId = setInterval(() => {
          countdown--;
          if (countdown > 0) {
            console.log(`Ghosts will be unscared in ${countdown} seconds`);
          } else {
            console.log("Unscaring ghosts now");
            clearInterval(unScareGhosts.timerId);
            unScareGhosts();
          }
        }, 1000);
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
      new Ghost("blinky", 348, 250),
      new Ghost("stinky", 376, 250),
      new Ghost("inky", 351, 250),
      new Ghost("clyde", 379, 250),
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
        hideElement('heart' + lives);
        lives--;
    
        showElement('round-loss-screen');
        
        setTimeout(() => {
          hideElement('round-loss-screen');
          restartGame(false); 
        }, 3000);
      }
       else {
        triggerGameOver();
      }
    }


    function triggerGameOver() {
      isMoving = false; 
      hideElement("health");
      showElement("game-over-screen");
      squares[pacmanCurrentIndex].classList.remove("pac-man");
    
      setTimeout(() => {
        hideElement("game-over-screen");
        restartGame(true); 
      }, 3000);
    }


    
  function checkForGhostCollision() {
    if (squares[pacmanCurrentIndex].classList.contains("ghost") &&
      !squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {

      ghosts.forEach(ghost => clearInterval(ghost.timerId));
      if (pacmanInterval) {
        clearInterval(pacmanInterval); 
      }
      squares[pacmanCurrentIndex].classList.remove("pac-man");
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
      if (score >= 280) {
        ghosts.forEach((ghost) => clearInterval(ghost.timerId));
        document.removeEventListener("keyup", movePacman);
        pacmanVelocity.x = 0;
        pacmanVelocity.y = 0;
    
        showElement("you-won-screen");
        setTimeout(function () {
          window.location.reload();
        }, 3000);
      }
    }


    function updateQuickstartMessage() {
      const quickstart = document.getElementById("quickstart");
      if (gameStarted) {
        quickstart.innerText = 'Say "CONTINUE" to resume the game!';
      } else {
        quickstart.innerText = 'When you\'re ready, say "START" to begin the game!';
      }
    }

    function applyDifficultySettings(level) {
      const settings = difficultySettings[level];
      if (settings) {
        ghosts.forEach((ghost) => {
          ghost.speed = settings.ghostSpeed;
          if (ghost.timerId) {
            clearInterval(ghost.timerId); 
            moveGhost(ghost); 
          }
        });
        // console.log(`Difficulty set to ${level}. Ghost speed: ${settings.ghostSpeed}`);
      } else {
        console.warn(`Unknown difficulty level: ${level}`);
      }
    }

    const difficultySettings = {
      Easy: { ghostSpeed: 400 },
      Medium: { ghostSpeed: 250 },
      Hard: { ghostSpeed: 75 },
    };
    
    function updateDifficulty(level) {
      chosenDifficulty = level;
      const difficultyElement = document.getElementById("difficulty");
      if (!difficultyElement) {
          console.error("Element with ID 'difficulty' not found.");
          return;
      }
        updateElementText("difficulty", level);
  
      const colorMap = {
          Easy: "#12b8dd",  // Blue for Easy
          Medium: "#ffcc00", // Yellow for Medium
          Hard: "#ff5722",   // Red for Hard
      };

      difficultyElement.style.color = colorMap[level] || "#fff";
  }
    
    function startGame(event) { 
      updateDifficulty(chosenDifficulty);
      applyDifficultySettings(chosenDifficulty);
      gameStarted = true;
      updateQuickstartMessage();
      hideElement("start-screen");
      hideElement("help-screen");
      showElement("health");
      isMoving = true;
      movePacman();
      ghosts.forEach((ghost) => moveGhost(ghost));
    }
  


    function showElement(id) {
      const element = document.getElementById(id);
      if (element) {
        if(['health', 'heart1', 'heart2', 'heart3'].includes(id)) element.style.display = "grid";
        else element.style.display = "flex";
      }
    }
    
    function hideElement(id) {
      const element = document.getElementById(id);
      if (element) element.style.display = "none";
    }
    
    function updateElementText(id, text) {
      const element = document.getElementById(id);
      if (element) element.innerText = text;
    }

    document.addEventListener("click", () => {
      initializeMicrophone();
      // startGame();
      // togglePause(1);
    });

  
    


  // function initializeMicrophone() {

  //   const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, region);

  //   speechConfig.speechRecognitionLanguage = "en-US"; 
  //   speechConfig.setProperty(SpeechSDK.PropertyId.SpeechServiceConnection_RecoLanguage, "en-US");


  //   const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();

  //   const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

  //   recognizer.recognizing = (s, e) => {
  //     if (e.result.reason === SpeechSDK.ResultReason.RecognizingSpeech) {
  //       handleVoiceCommand(e.result.text); 
  //       // console.log(e.result.text);
  //     } else if (e.result.reason === SpeechSDK.ResultReason.NoMatch) {
  //       console.log("No speech recognized.");
  //     }
  //   };
      
  //   recognizer.startContinuousRecognitionAsync();
  // }


  let isListening = false; 
function initializeMicrophone() {
  if (isListening) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.error("Browser does not support Speech API");
    return;
  }

  const recognizer = new SpeechRecognition();

  recognizer.lang = "en-US";
  recognizer.interimResults = true; 
  recognizer.continuous = true;     

  recognizer.onresult = (event) => {
    const lastResultIndex = event.results.length - 1;
    const text = event.results[lastResultIndex][0].transcript;
    handleVoiceCommand(text);
  };

  recognizer.onerror = (event) => {
    if (event.error === 'not-allowed') {
      recognizer.onend = null; 
      isListening = false;
      console.error("Microphone blocked. Make sure you are using HTTPS or localhost.");
    } else if (event.error === 'no-speech') {
      console.log("No speech detected."); 
    } else {
      console.error("Speech Error:", event.error);
    }
  };

  recognizer.onend = () => {
    if (isListening) {
      recognizer.start();
    }
  };

  try {
    recognizer.start();
    isListening = true;
    console.log("Microphone started.");
  } catch (err) {
    console.error("Failed to start:", err);
  }
}
});
