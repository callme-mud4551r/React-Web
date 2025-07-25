import axios from 'axios';

export const signup = (email, password) =>
  axios.post('http://localhost:5000/signup', { email, password });