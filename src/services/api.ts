import axios from 'axios';

const apiCaller = axios.create({
    baseURL: 'http://localhost:8099/api',
});

export default apiCaller;