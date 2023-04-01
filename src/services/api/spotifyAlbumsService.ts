import { api } from "./Api";
import { endpoints } from "../endpoints";

export class SpotifyAlbumsService {
  static async getAlbums(ids: string, market?: string) {
    const data = await api.get(endpoints.Albums, {
      params: {
        ids,
        market,
      },
    });
    return data;
  }
}
