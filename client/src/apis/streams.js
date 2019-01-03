import axios from 'axios';

// axios instance 생성  
export default axios.create({
  baseURL: 'http://localhost:3003'
});
