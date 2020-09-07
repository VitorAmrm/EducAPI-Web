import axios from 'axios';

const api = axios.create({
    baseURL: 'https://educapi-a4s.herokuapp.com/',
    responseType: "json"
});

export default api;