'use strict';

// Seletores dos elementos da tela
const resultText = document.querySelector('.message');
const scoreText = document.querySelector('.label-score');
const highscoreText = document.querySelector('.label-highscore');
const numberBlockText = document.querySelector('.number');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const userInput = document.querySelector('.guess');

// Funções Utilitárias para alterar a interface
const setResultText = text => (resultText.textContent = text);
const setScoreText = text => (scoreText.textContent = text);
const setHighscoreText = text => (highscoreText.textContent = text);
const setNumberBlockText = text => (numberBlockText.textContent = text);
const backgroundChanger = color => (document.body.style.background = color);

// Gerenciamento de pontuação
let score = 20;
let highscore = '0';

const deductScore = () => score--;
const redefineScore = () => (score = 20);

const highscoreRegist = () => {
  if (score > highscore) {
    highscore = score;
    setHighscoreText(`🥇 Highscore: ${highscore}`);
  }
};

// Botão reset
const resetGame = () => {
  score = 20;
  setResultText('Start guessing...');
  setScoreText('💯 Score: 20');
  cpuChoice = Math.floor(Math.random() * 20) + 1;
  setNumberBlockText('?');
  backgroundChanger('#222');
  userInput.value = '';
};

// Lógica do jogo
let cpuChoice = Math.floor(Math.random() * 20) + 1;
const winCondition = () => {
  const playerChoice = Math.trunc(userInput.value);
  if (playerChoice < 1 || playerChoice > 20) {
    setResultText('ERROR ⛔️ Add a number between 1 and 20!');
  } else if (playerChoice === cpuChoice) {
    setResultText('🎉 Correct Number!');
    backgroundChanger('rgb(96, 179, 71)');
    setNumberBlockText(cpuChoice);
    highscoreRegist();
  } else if (playerChoice !== cpuChoice) {
    if (score == 0) {
      setResultText('💥 You lost the game!');
    } else {
      deductScore();
      setScoreText(`💯 Score: ${score}`);
      setResultText(playerChoice > cpuChoice ? '📈 Too high!' : '📉 Too low!');
    }
  }
};
// Botoes jogar e reiniciar
btnCheck.addEventListener('click', winCondition);
btnAgain.addEventListener('click', resetGame);
