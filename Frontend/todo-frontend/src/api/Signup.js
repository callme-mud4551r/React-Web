import axios from 'axios';

export const signup = (email, password) => {
  return axios.post('http://localhost:5000/signup', { email, password });
};
