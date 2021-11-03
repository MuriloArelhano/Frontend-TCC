import axios from 'axios';
const axiosConfig = axios.create({
  baseURL: `http://${process.env.REACT_APP_API_URL}`
  
});

export default axiosConfig;