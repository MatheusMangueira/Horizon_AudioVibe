import { AxiosResponse } from "axios";
import { Api } from "../Api";

class spotifyService {
  public static async getSpotifyToken(): Promise<AxiosResponse<any>> {
    return await Api.get("/spotify/token", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export { spotifyService };
