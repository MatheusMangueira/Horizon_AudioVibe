import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { MusicNote } from "phosphor-react";

type Props = {
  albumsClick?: () => void;
};

export const BottomAlbums = ({ albumsClick }: Props) => {
  const handleClick = () => {
    albumsClick && albumsClick();
  };

  return (
    <Box w="100%">
      <button
        onClick={handleClick}
        style={{
          width: "100%",
        }}
      >
        <Box
          display="flex"
          _hover={{ bg: "gray.800" }}
          p="10px"
          cursor="pointer"
          mb="5px"
        >
          <Text mr="10px">
            <MusicNote
              size={24}
              weight="fill"
              style={{
                color: "#e802f8",
              }}
            />
          </Text>
          <Text>Albums</Text>
        </Box>
      </button>
    </Box>
  );
};
