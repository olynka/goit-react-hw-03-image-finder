import axios from 'axios';

const perPage = 12;
const imageType = 'photo';
const orientation = 'horizontal';

axios.defaults.baseURL = `https://pixabay.com/api/`;

export const searchImage = async query => {
  const response = await axios.get(
    `?q=${query}&page=1&key=29705426-bfa25e249bc10439228dcaa9b&image_type=${imageType}&orientation=${orientation}&per_page=${perPage}`
  );
  return response.data;
};