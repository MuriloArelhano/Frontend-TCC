import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: `http://${process.env.REACT_API_URL}:${process.env.REACT_API_PORT}`
});

export default axiosConfig;