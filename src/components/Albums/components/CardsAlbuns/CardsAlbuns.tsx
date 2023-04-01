import { Box, Text, Flex } from "@chakra-ui/react";

type Props = {
  bgImage?: string;
  name?: string;
};

export const CardsAlbums = ({ bgImage, name }: Props) => {
  return (
    <Flex
      flexDirection="column"
      h="230px"
      w="100%"
      justify="center"
      align="center"
      m="10px"
      flexBasis="300px"
    >
      {/* <img src={bgImage} width={200} height={200} alt="" /> */}
      <Box bgImage={bgImage} w="100%" h="100%" bgSize="cover" />
      <Text mt="5px" fontSize="14px" color="yellow.900">
        {name}
      </Text>
    </Flex>
  );
};
