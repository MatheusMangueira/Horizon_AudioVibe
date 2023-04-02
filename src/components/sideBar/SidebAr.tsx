import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ButtonHome } from '../Button/ButtonHome';
import { ButtonAlbums } from '../Button/ButtonAlbums';
import { ButtonArtist } from '../Button/ButtonArtist';

type Props = {
  album?: () => void;
  artist?: () => void;
  home?: () => void;
};

export const SideBar = ({ album, artist, home }: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    setIsMobile(!isMobile);
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth > 980 && false);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <Flex
          position="absolute"
          bg="gray.900"
          w="300px"
          flexDirection="column"
          h="100%"
          p="20px"
          top="70px"
          left="0"
          borderColor="yellow.900"
          borderRadius="8px"
          zIndex="9999"
          boxShadow="5px 7px 16px rgba(255, 186, 8, 0.4);"
        >
          <ButtonHome homeClick={home} />
          <ButtonAlbums albumsClick={album} />
          <ButtonArtist bottomArtist={artist} />
        </Flex>
      )}

      <Flex
        w="100%"
        h="70px"
        boxShadow="5px 7px 16px rgba(255, 186, 8, 0.4);"
        alignItems="center"
        justify={{ base: 'start', lg: 'space-around' }}
      >
        <Button
          onClick={handleMobile}
          display={{ base: 'block', lg: 'none' }}
          bg="none"
          p="0"
          w="100px"
          textAlign="center"
          border="1px"
          borderColor="yellow.900"
          borderRadius="8px"
          _hover={{ bg: 'yellow.900', color: 'gray.900' }}
          color="yellow.900"
          ml="20px"
        >
          <Text fontSize="16px">Menu</Text>
        </Button>

        <Box ml="20px" w="100%" display={{ base: 'none', lg: 'block' }}>
          <Text fontSize="3xl">
            Audio
            <Text as="span" color="yellow.900">
              V
            </Text>
            ibe
          </Text>
        </Box>
        <Flex display={{ base: 'none', lg: 'flex' }} mr="20px" w="100%">
          <ButtonHome homeClick={home} />
          <ButtonAlbums albumsClick={album} />
          <ButtonArtist bottomArtist={artist} />
        </Flex>
      </Flex>
    </>
  );
};
