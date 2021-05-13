import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_URL}`
});

export default axiosConfig;