import axios from 'axios';
const axiosConfig = axios.create({
  baseURL: `https://${process.env.REACT_APP_API_URL}`
  
});

export default axiosConfig;