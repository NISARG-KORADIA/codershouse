import axios from 'axios';

// we can directly use .post(), .get() methods with axios like this: axios.post().
// with .create([config]) we are creating new instance of axios with our config and storing it in api.

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});


//list of all the endpoints

//all of this functions returns a promise 
export const sendOtp = (data) => api.post('/api/send-otp', data);
export const verifyOtp = (data) => api.post('/api/verify-otp', data);
export const activate = (data) => api.post('/api/activate', data);

export default api;