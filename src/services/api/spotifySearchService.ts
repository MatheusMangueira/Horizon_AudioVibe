import { endpoints } from '../endpoints';
import { api } from './Api';

export class spotifySearchService {
  static async getSearch(
    q?: string,
    type?: string,
    limit?: number,
    market?: string,
    offset?: number,
    include_external?: string
  ) {
    const data = await api.get(endpoints.search, {
      params: {
        q: q,
        type: type,
        limit: limit,
        market: 'ES',
        offset: 0,
        include_external: 'audio'
      }
    });
    return data;
  }
}
