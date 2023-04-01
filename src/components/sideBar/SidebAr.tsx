import { Flex, Text } from "@chakra-ui/react";
import { BottomAlbums } from "../Buttom/BottomAlbums";
import { BottomArtist } from "../Buttom/BottomArtist";
import { BottomHome } from "../Buttom/BottomHome";

type Props = {
  album?: () => void;
  artist?: () => void;
  home?: () => void;
};

export const SideBar = ({ album, artist, home }: Props) => {
  return (
    <Flex
      h="100%"
      boxShadow="2px 3px 19px 4px rgba(255, 186, 8, 0.4)"
      p="20px"
      w="300px"
      borderRadius="0 20px 0 0"
      flexDirection="column"
    >
      <Flex justify="center" w="10%0">
        <Text fontSize="3xl">
          Audio
          <Text as="span" color="yellow.500">
            V
          </Text>
          ibe
        </Text>
      </Flex>

      <Flex
        justify="space-between "
        flexDirection="column"
        h="100%"
        align="center"
      >
        <Flex flexDirection="column" mt="20px" w="100%">
          <BottomAlbums albumsClick={album} />
          <BottomHome homeClick={home} />
          <BottomArtist bottomArtist={artist} />
        </Flex>
        <Flex>
          <Text fontSize="12px " color="gray.100">
            © 2023 Matheus Mangueira
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
