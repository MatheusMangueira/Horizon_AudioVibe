import { endpoints } from '../endpoints';
import { api } from './Api';

export class spotifyArtistService {
  static async getArtist(id: string) {
    const data = await api.get(endpoints.artist(id));
    return data;
  }
}
