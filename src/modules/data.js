export const urlAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/G2kEfDsYPEyIWl76btP3/scores/';

export const getStorage = async () => {
  const datos = await fetch(urlAPI);
  return datos.json();
};