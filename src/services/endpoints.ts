export const endpoints = {
  baseURL: process.env.REACT_APP_API_BASEURL,
  endpoints: process.env.REACT_APP_API_ENDPOINT,
  categories: "browse/categories",
  artist: (id: string) => `/artists/${id}`,
};
