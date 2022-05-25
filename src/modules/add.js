import SCORE from './data.js';
import { setStorage } from './storage.js';

const name = document.getElementById('name');
const point = document.getElementById('score');

const addScore = () => {
  SCORE.SCOREArr.push({ name: name.value, points: point.value });
  setStorage();
};

export default addScore;