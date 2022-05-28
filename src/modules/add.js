import { urlAPI } from './data.js';

const addScore = async (user, score) => {
  await fetch(urlAPI, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default addScore;