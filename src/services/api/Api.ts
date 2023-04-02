import axios from 'axios';
import { endpoints } from '../endpoints';
import { LocalStorageService } from '../localStorageService/localStorageService';
import { spotifyTokenService } from './spotifyTokenService';

export const api = axios.create({
  baseURL: endpoints.baseURL,
  headers: {
    Authorization:
      'Bearer ' +
      LocalStorageService.getToken(
        process.env.REACT_APP_TOKEN_KEY || 'not found'
      )
  }
});

api.interceptors.response.use(
  async function (config: any) {
    return config;
  },
  async (error) => {
    const token = LocalStorageService.getToken(
      process.env.REACT_APP_TOKEN_KEY || 'not found'
    );

    const tokenRefused = error.response.status === 401;

    if (tokenRefused) {
      try {
        const response = await spotifyTokenService.getSpotifyToken(token);
        const newToken = response.data.access_token;

        api.defaults.headers.Authorization = 'Bearer ' + newToken;

        const config = error.config;
        config.headers.Authorization = 'Bearer ' + newToken;

        return api(config);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
