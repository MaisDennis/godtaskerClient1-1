import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://3.142.16.89',
  // baseURL: 'https://testdeploy.godtasker.com',
  baseURL: 'http://localhost:3333',
})

export default api;
