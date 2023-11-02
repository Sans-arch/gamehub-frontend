import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'gamehub-token': token } = parseCookies();

const apiCaller = axios.create({
  baseURL: 'http://localhost:3003/api',
});

if (token) {
  apiCaller.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export default apiCaller;
