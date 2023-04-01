import { endpoints } from "../endpoints";
import { api } from "./Api";

export class spotifySearchService {
  static async getSearch(
    q?: string,
    type?: string,
    market?: string,
    limit?: number,
    offset?: number,
    include_external?: string
  ) {
    const data = await api.get(endpoints.search, {
      params: {
        q: q,
        type: "album",
        market: "ES",
        limit: 10,
        offset: 0,
      },
    });
    return data;
  }
}
