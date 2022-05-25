import { SCORE } from "./data.js";
import { getStorage } from "./storage.js";

const scoreTable = document.getElementById('score-table');

export const printScore = () => {
  getStorage();
  scoreTable.innerHTML = '';
  for (let i = 0; i < SCORE.SCOREArr.length; i += 1) {
    const scoreItem = document.createElement('p');
    scoreItem.textContent = `${SCORE.SCOREArr[i].name} ${SCORE.SCOREArr[i].points}`;
    scoreTable.appendChild(scoreItem);
  }
}