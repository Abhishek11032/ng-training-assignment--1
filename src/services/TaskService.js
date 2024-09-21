import axios from 'axios';

const API_URL = 'http://localhost:5000/tasks';

const getTasks = () => {
  return axios.get(API_URL);
};

const addTask = (task) => {
  return axios.post(API_URL, task);
};

const updateTask = (id, updatedTask) => {
  return axios.put(`${API_URL}/${id}`, updatedTask);
};

const deleteTask = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
};
