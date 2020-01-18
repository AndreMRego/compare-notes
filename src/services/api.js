import axios from 'axios';

const api = axios.create({
  baseURL: 'https://notadecortesisu.herokuapp.com/',
});

export default api;
