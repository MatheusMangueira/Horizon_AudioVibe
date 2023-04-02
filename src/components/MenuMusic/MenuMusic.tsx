import { Box, Flex } from '@chakra-ui/react';

export const MenuMusic = () => {
  return (
    <Box
      w="100%"
      h="150px"
      boxShadow="9px -5px 8px rgba(255, 186, 8, 0.4)"
      p="20px"
      borderRadius="0 0px 0"
      bg="gray.900"
    >
      <Flex justify="center" w="100%">
        <audio
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          controls
        />
      </Flex>
    </Box>
  );
};
