import axios from 'axios';
import { endpoints } from '../endpoints';

export class spotifyTokenService {
  static async getSpotifyToken(refreshToken?: string) {
    const authHeader =
      'Basic ' +
      window.btoa(
        `${process.env.REACT_APP_CLIENTID}:${process.env.REACT_APP_CLIENTSECRET}`
      );

    const requestBody = new URLSearchParams();
    if (refreshToken) {
      requestBody.append('grant_type', 'client_credentials');
      requestBody.append('refresh_token', refreshToken);
    } else {
      requestBody.append('grant_type', 'client_credentials');
    }

    const response = await axios.post(
      endpoints.endpoints + 'api/token',
      requestBody,
      {
        headers: {
          Authorization: authHeader,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    return response;
  }
}
