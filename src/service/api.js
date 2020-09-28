import axios from 'axios';

const api = axios.create({
    baseURL: 'https://educapi-a4sufpb.herokuapp.com/',
    responseType: "json"
});

export default api;