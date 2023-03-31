import { api } from "./Api";
import { endpoints } from "../endpoints";

export class SpotifyCategoryService {
  static async getCategories(
    limit?: number,
    offset?: number,
    country?: string,
    locale?: string
  ) {
    const data = await api.get(endpoints.categories, {
      params: {
        limit,
        offset,
        country,
        locale,
      },
    });
    return data;
  }
}
