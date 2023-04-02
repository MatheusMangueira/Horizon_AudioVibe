import { Box, Flex } from '@chakra-ui/react';
import { useReducer, useState } from 'react';
import { Albums, Artist, HomeMusic, Menu } from '../components';

import { spotifySearchService } from '../services/api/spotifySearchService';

const activeState = (sectionActive: string, state: any) => {
  const newSection: any = {};
  for (const section in state) {
    newSection[section] = section === sectionActive;
  }
  return newSection;
};

type Action =
  | { type: 'artist'; payload?: any }
  | { type: 'album'; payload?: any }
  | { type: 'home'; payload?: any };

type initialState = {
  artist: boolean;
  album: boolean;
  home: boolean;
};

const reducer = (state: initialState, action: Action) => {
  switch (action.type) {
    case 'artist':
      return activeState('artist', state);
    case 'album':
      return activeState('album', state);
    case 'home':
      return activeState('home', state);
    default:
      return 'Artist';
  }
};

export const HomePage = () => {
  const [filterAlbums, setFilterAlbums] = useState<any>([]);
  const [filterArtist, setFilterArtist] = useState<any>([]);

  const [state, dispatch] = useReducer(reducer, {
    artist: false,
    album: false,
    home: true
  });

  const handleSearchAlbums = async (search: string) => {
    try {
      const response = await spotifySearchService.getSearch(
        search,
        'album',
        10
      );
      setFilterAlbums(response.data.albums.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchArtist = async (search: string) => {
    try {
      const response = await spotifySearchService.getSearch(search, 'artist');
      setFilterArtist(response.data.artists.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleArtist = () => {
    dispatch({ type: 'artist' });
  };

  const handleHome = () => {
    dispatch({ type: 'home' });
  };

  const handleAlbums = () => {
    dispatch({ type: 'album' });
  };

  return (
    <Flex w="100%" h="100vh " flexDirection={{ base: 'column' }}>
      <Box>
        <Menu artist={handleArtist} album={handleAlbums} home={handleHome} />
      </Box>

      <Box h="100%" w="100%">
        {state.artist && (
          <Artist data={filterArtist} searchData={handleSearchArtist} />
        )}
        {state.album && (
          <Albums searchData={handleSearchAlbums} allAlbums={filterAlbums} />
        )}
        {state.home && (
          <HomeMusic homeToArtist={handleArtist} homeToAlbums={handleAlbums} />
        )}
      </Box>
    </Flex>
  );
};
