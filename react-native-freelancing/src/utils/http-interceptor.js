import axios from 'axios';

import {API_BASE_URL} from '../../env.json';
import {Storagehelper} from './storage-helper';

export const http = axios.create({
  baseURL: API_BASE_URL,
});

http.interceptors.request.use(
  async (config) => {
    let accessToken = await Storagehelper.getAccessToken();

    console.log('Access token', accessToken);

    if (accessToken) {
      if (config.method !== 'OPTIONS' || !config.url.includes('login')) {
        config.headers.authorization = accessToken;
      }
    }

    return config;
  },
  (error) => {
    // request error handling
    return Promise.reject(error);
  },
);
