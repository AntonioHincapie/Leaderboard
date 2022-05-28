import './style.css';
import addScore from './modules/add.js';
import getScores from './modules/printscore.js';

const refresh = document.getElementById('refresh');
const submit = document.getElementById('submit');
const addScoreForm = document.getElementById('add-score');

refresh.addEventListener('click', getScores());

window.onload = getScores();

submit.addEventListener('click', async () => {
  const name = document.getElementById('name');
  const point = document.getElementById('score');
  await addScore(name.value, point.value);
  getScores();
  addScoreForm.reset();
});
