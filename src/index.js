import './style.css';
import addScore from './modules/add.js';
import printScore from './modules/printscore.js';

const refresh = document.getElementById('refresh');
const submit = document.getElementById('submit');
const addScoreForm = document.getElementById('add-score');

refresh.addEventListener('click', () => {
  document.location.reload(true);
});

window.onload = printScore();

submit.addEventListener('click', () => {
  addScore();
  printScore();
  addScoreForm.reset();
});
