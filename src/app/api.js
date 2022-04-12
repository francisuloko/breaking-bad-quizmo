import axios from 'axios';

const breakingBadAPI = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});

export default breakingBadAPI;
