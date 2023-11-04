import axios from 'axios';

export const apiCaller = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API,
});

export default apiCaller;
