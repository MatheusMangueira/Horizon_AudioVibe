import { Box, Button, Flex, Text } from '@chakra-ui/react';

type Props = {
  homeToAlbums?: () => void;
  homeToArtist?: () => void;
};

export const HomeMusic = ({ homeToAlbums, homeToArtist }: Props) => {
  return (
    <Flex
      bgImage="https://images.pexels.com/photos/2240770/pexels-photo-2240770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      bgRepeat="no-repeat"
      bgSize="cover"
      flexDirection="column"
      p="40px"
      w="100%"
      h="calc(100vh - 70px)"
    >
      <Flex mb="10px" w="100%" justify="start"></Flex>
      <Flex
        p="10px"
        align="center"
        justify="center"
        flexDirection="column"
        w="100%"
        h="100%"
      >
        <Flex justify="center" w="100%">
          <Box>
            <Text color="yellow.900" fontSize={{ base: '54px', lg: '7xl' }}>
              Audio
              <Text as="span" color="gray.900">
                V
              </Text>
              ibe
            </Text>
            <Text
              p="10px"
              borderRadius="20px"
              background="linear-gradient(90deg,  #ff8c00, #ffff00)"
              w="100%"
              color="gray.900"
              fontSize={{ base: '32px', lg: '7xl' }}
            >
              Feel the vibe
            </Text>
            <Flex justify="end">
              <Button
                onClick={homeToAlbums}
                mt="30px"
                borderRadius="50%"
                bg="none"
                h={{ base: '75px', lg: '90px' }}
                fontSize={{ base: '12px', lg: '18px' }}
                color="yellow.900"
                border="1px solid #ffba08"
                _hover={{ bg: '#ffba08', color: '#181b23' }}
              >
                Albums
              </Button>
              <Button
                onClick={homeToArtist}
                mt="30px"
                ml="20px"
                borderRadius="50%"
                bg="none"
                color="yellow.900"
                h={{ base: '75px', lg: '90px' }}
                fontSize={{ base: '12px', lg: '18px' }}
                border="1px solid #ffba08"
                _hover={{ bg: '#ffba08', color: '#181b23' }}
              >
                Artists
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
