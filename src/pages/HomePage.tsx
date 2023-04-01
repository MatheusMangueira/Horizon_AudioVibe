import { Albums, MenuMusic, SideBar } from "../components";
import { Grid, Flex, Box } from "@chakra-ui/react";
import { useEffect, useReducer, useState } from "react";
import { SpotifyAlbumsService } from "../services/api/spotifyAlbumsService";
import { spotifySearchService } from "../services/api/spotifySearchService";

const activeState = (sectionActive: string, state: any) => {
  const newSection: any = {};
  for (const section in state) {
    newSection[section] = section === sectionActive;
  }
  return newSection;
};

type Action =
  | { type: "artist"; payload?: any }
  | { type: "album"; payload?: any };

type initialState = {
  artist: boolean;
  album: boolean;
};

const reducer = (state: initialState, action: Action) => {
  switch (action.type) {
    case "artist":
      return activeState("artist", state);
    case "album":
      return activeState("album", state);
    default:
      return "Artist";
  }
};

export const HomePage = () => {
  const [categories, setCategories] = useState<any>([]);
  const [filterAlbums, setFilterAlbums] = useState<any>([]);

  const [state, dispatch] = useReducer(reducer, {
    artist: true,
    album: false,
  });

  const handleAlbums = async () => {
    const idAlbums =
      "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc";
    const market = "ES";
    dispatch({ type: "album" });

    try {
      const response = await SpotifyAlbumsService.getAlbums(idAlbums, market);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchAlbums = async (search: string) => {
    try {
      const response = await spotifySearchService.getSearch(search);
      setFilterAlbums(response.data.albums.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAlbums();
  }, []);

  return (
    <Box>
      <Grid
        templateColumns={{ base: "1fr", sm: "1fr 100%" }}
        w="100%"
        height="100vh"
      >
        <Flex flexDirection="column" w="100%">
          <SideBar album={handleAlbums} artist={() => {}} home={() => {}} />
        </Flex>
        <Grid w="100%" templateRows="1fr auto">
          {state.album && (
            <Albums
              searchData={handleSearchAlbums}
              allAlbums={categories}
              albums={filterAlbums}
            />
          )}
          <MenuMusic />
        </Grid>
      </Grid>
    </Box>
  );
};
