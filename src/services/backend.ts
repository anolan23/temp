import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_API;
export default axios.create({
  baseURL,
  // withCredentials: true,
});
