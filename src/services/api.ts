import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API,
});

// Qual processamento realizar com todas as requests que herdarem deste baseService
api.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('@Auth:token')) {
      config.headers.Authorization = `Bearer ${localStorage.getItem('@Auth:token')}`;
    }

    config.baseURL = import.meta.env.VITE_BACKEND_API;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptar todas as responses antes de chegarem a nosso front-end
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error)
    if (error.response.status === 401) {
      localStorage.removeItem('@Auth:token');
      localStorage.removeItem('@Auth:user');
      window.location.href = '/'; // Redireciona para a página da home já deslogado após token expirar
    }
    return Promise.reject(error);
  }
)


export default api;
