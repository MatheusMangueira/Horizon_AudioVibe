import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { House, MusicNote, User } from "phosphor-react";

type Props = {
  bottomArtist?: () => void;
};

export const BottomArtist = ({ bottomArtist }: Props) => {
  const handleClick = () => {
    bottomArtist && bottomArtist();
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
            <User
              size={24}
              weight="fill"
              style={{
                color: "#00ff26",
              }}
            />
          </Text>
          <Text>Artist</Text>
        </Box>
      </button>
    </Box>
  );
};
