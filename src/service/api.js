import axios from 'axios';

const api = axios.create({
    baseURL: 'http://educapi-v2.herokuapp.com'
});

 async function GET(){
     api.get('contexts').then(response => {return response.data}).catch(error => {return {erro: 400}})
 }
export default GET;