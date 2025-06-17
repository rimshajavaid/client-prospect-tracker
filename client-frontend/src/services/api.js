import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

// CRUD functions
export const getClients = () => API.get('/clients');
export const createClient = (data) => API.post('/clients', data);
export const updateClient = (id, data) => API.put(`/clients/${id}`, data);
export const deleteClient = (id) => API.delete(`/clients/${id}`);
