import { Box, Text, Flex, Button } from '@chakra-ui/react';

type Props = {
  bgImage?: string;
  name?: string;
  albumModal?: () => void;
  release_date?: string;
  url_spotify?: string;
  total_tracks?: string;
};

export const CardsAlbums = ({
  release_date,
  total_tracks,
  url_spotify,
  bgImage,
  name,
  albumModal
}: Props) => {
  return (
    <Flex
      flexDirection="column"
      h="300px"
      maxW="300px"
      justify="center"
      align="center"
      m="10px"
      flexBasis="300px"
    >
      <Box
        bgImage={bgImage}
        w="100%"
        h="100%"
        bgRepeat="no-repeat"
        bgSize="contain"
      />
      <Flex flexDirection="column" w="100%">
        <Text mt="5px" fontSize="14px" color="yellow.900">
          <span
            style={{
              color: 'white'
            }}
          >
            Name:{' '}
          </span>
          {name}
        </Text>
        <Text mt="5px" fontSize="14px" color="yellow.900">
          <span
            style={{
              color: 'white'
            }}
          >
            Release data:
          </span>{' '}
          {release_date}
        </Text>
        <Text mt="5px" fontSize="14px" color="yellow.900">
          <span
            style={{
              color: 'white'
            }}
          >
            Total tracks:
          </span>{' '}
          {total_tracks}
        </Text>
        <a
          target="_blank"
          href={url_spotify}
          style={{
            color: '#6f6fe8',
            textDecoration: 'underline ',
            marginTop: '5px',
            fontSize: '14px'
          }}
          rel="noreferrer"
        >
          {url_spotify}
        </a>
      </Flex>
    </Flex>
  );
};
