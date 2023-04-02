export const endpoints = {
  baseURL: process.env.REACT_APP_API_BASEURL,
  endpoints: process.env.REACT_APP_API_ENDPOINT,
  Albums: `https://api.spotify.com/v1/albums/`,
  search: `https://api.spotify.com/v1/search`,
  artist: (id: string) => `/artists/${id}`
};
