import SCORE from './data.js';

export const setStorage = () => {
  localStorage.setItem('score', JSON.stringify(SCORE.SCOREArr));
};

export const getStorage = () => {
  if (JSON.parse(localStorage.getItem('score'))) {
    SCORE.SCOREArr = JSON.parse(localStorage.getItem('score'));
  } else {
    SCORE.SCOREArr = [];
  }
};