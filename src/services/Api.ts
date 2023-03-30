import axios, { AxiosResponse } from "axios";
import { TOKEN_KEY } from "../pages/HomePage";
import { getLocalStorageItem } from "./localStorage";

const clientId = "81de3d457e9c4db391afc2d4d0e007da";
const clientSecret = "84901b8636f542ff87ec49d7f90ce8a0";
const endpoint = "https://accounts.spotify.com/";
export interface SpotifyToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
}

export const getSpotifyToken = async (
  refreshToken?: string
): Promise<AxiosResponse<SpotifyToken>> => {
  const authHeader = "Basic " + window.btoa(`${clientId}:${clientSecret}`);

  const requestBody = new URLSearchParams();
  if (refreshToken) {
    requestBody.append("grant_type", "client_credentials");
    requestBody.append("refresh_token", refreshToken);
  } else {
    requestBody.append("grant_type", "client_credentials");
  }

  const response = await axios.post(endpoint + "api/token", requestBody, {
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return response;
};

export const getSpotifyArtist = async (
  idAlbums?: string
): Promise<AxiosResponse<any>> => {
  return await axios.get(
    "https://open.spotify.com/playlist/7ve0sPjKQIoWEPmZ9EhrMf"
  );
};
