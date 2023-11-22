import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rocketmovie-api-ak9p.onrender.com',
})