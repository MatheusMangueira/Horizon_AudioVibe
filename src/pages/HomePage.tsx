import { getSpotifyArtist, getSpotifyToken } from "../services/Api";
import { useEffect } from "react";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../services/localStorage";

export const TOKEN_KEY = "myTokenSpotify";

export const HomePage = () => {
  useEffect(() => {
    getSpotifyToken()
      .then((response) => {
        setLocalStorageItem(TOKEN_KEY, response.data.access_token);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const refreshTokenSpotify = async () => {
    const accessToken = getLocalStorageItem(TOKEN_KEY);
    if (accessToken) {
      console.log("token...");
      await getSpotifyToken(accessToken);
    } else {
      console.log("Spotify token does not have a refresh token.");
    }
    return null;
  };
  setInterval(refreshTokenSpotify, 3600000);

  const handleArtist = async () => {
    const idArtist = "4Z8W4fKeB5YxbusRsdQVPb";
    try {
      const response = await getSpotifyArtist();
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleArtist}>ver...</button>
      <h1>Home Page</h1>
    </div>
  );
};

