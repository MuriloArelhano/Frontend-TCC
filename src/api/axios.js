import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: `http://${REACT_API_URL}`
});

export default axiosConfig;