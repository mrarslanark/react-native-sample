import axios from 'axios';

export const CONSTANTS = {
  BASE_URL: '',
};

export const HTTPClient = axios.create({
  baseURL: CONSTANTS.BASE_URL,
});
