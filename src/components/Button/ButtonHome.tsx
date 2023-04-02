import { Box, Text } from '@chakra-ui/react';
import { House } from 'phosphor-react';

type Props = {
  homeClick?: () => void;
};

export const ButtonHome = ({ homeClick }: Props) => {
  const handleClick = () => {
    homeClick && homeClick();
  };
  return (
    <Box w="100%">
      <button
        onClick={handleClick}
        style={{
          width: '100%'
        }}
      >
        <Box
          display="flex"
          _hover={{ bg: 'gray.800' }}
          p="10px"
          cursor="pointer"
          mb="5px"
        >
          <Text mr="10px">
            <House
              size={24}
              weight="fill"
              style={{
                color: '#00edf9'
              }}
            />
          </Text>
          <Text>Home</Text>
        </Box>
      </button>
    </Box>
  );
};
