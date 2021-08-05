import axios from 'axios';
const instance = axios.create({
  baseURL:'https://burger-purchase.firebaseio.com/'
})
export default instance;