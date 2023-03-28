import { createAsyncThunk } from "@reduxjs/toolkit";
import { spotifyService } from "../../services/spotifyService/spotifyService";

export const getSpotifyList = createAsyncThunk(
  "spotify/getSpotifyList",
  async () => {
    try {
      const response = await spotifyService.getSpotifyToken();
      const {} = response.data;

      return {};
    } catch (error) {
      return error;
    }
  }
);
