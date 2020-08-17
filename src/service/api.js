import axios from 'axios'

const api = axios.create({ baseUrl : 'https://educapi-v2.herokuapp.com' });  
                        
export default api;