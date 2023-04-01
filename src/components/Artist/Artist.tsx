import { Box, Button, Flex, Input, Spinner, Text } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";

import Tippy from "@tippyjs/react";
import "react-tippy/dist/tippy.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

type Props = {
  data?: any;
  searchData?: (data: any) => void;
};

export const Artist = ({ data, searchData }: Props) => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    defaultValues: {
      search: "",
    },
  });

  const handleSubmitArtist = (dataArtist: any) => {
    if (searchData) {
      searchData(dataArtist.search);
    }
  };

  return (
    <Box h="100%" p={{ base: "0", lg: "40px" }} w="100%">
      <Flex w="100%" justify="start">
        <Text ml="20px" mt="20px" fontSize={{ lg: "30px", base: "18px" }}>
          Artists
        </Text>
      </Flex>
      <Flex
        w={{ base: "300px", lg: "400px" }}
        mb="40px"
        m="10px"
        align="center"
      >
        <Controller
          name="search"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              value={value}
              border="1px"
              borderStyle="solid"
              borderColor="yellow.900"
              size="md"
              color="white"
              placeholder="Search Artists"
            />
          )}
        />

        <Button
          onClick={handleSubmit(handleSubmitArtist)}
          _hover={{
            bg: "gray.900",
            color: "yellow.900",
          }}
          m="10px"
          w="100px"
          h="100%"
          border="none"
          bg="yellow.900"
          color="gray.900"
          cursor="pointer"
          p="10px"
          borderRadius="5px"
        >
          <Text fontSize="14px">Search</Text>
        </Button>
      </Flex>

      <Flex w="100%" flexWrap="wrap" flexDirection="row">
        {data &&
          data.map((i: any) => (
            <Tippy content={i.name}>
              <Box
                bgImage={i.images.map((i: any) => i.url)}
                m="10px"
                border="1px"
                borderColor="yellow.900"
                bgRepeat="no-repeat"
                bgSize="cover"
                w="100px"
                borderRadius="50%"
                h="100px"
              />
            </Tippy>
          ))}
      </Flex>
    </Box>
  );
};
