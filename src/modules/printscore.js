import { getStorage } from "./data.js";

const printScore = (datos) => {
  const scoreTable = document.getElementById('score-table');
  scoreTable.innerHTML = '';
  datos.forEach((score) => {
    const scoreItem = document.createElement('p');
    scoreItem.textContent = `${score.user} ${score.score}`;
    scoreTable.appendChild(scoreItem);
  });
};

const getScores = async () => {
  const datosScore = await getStorage();
  printScore(datosScore.result);
};

export default getScores;