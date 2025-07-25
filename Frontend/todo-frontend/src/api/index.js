import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getTodos = () => axios.get(`${API_BASE_URL}/todos`);
export const addTodo = ({ title }) => axios.post(`${API_BASE_URL}/todos`, { title });
export const updateTodo = (id, data) => axios.put(`${API_BASE_URL}/todos/${id}`, data);
export const deleteTodo = (id) => axios.delete(`${API_BASE_URL}/todos/${id}`);