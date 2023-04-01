import { Box, Button, Flex, Input, Spinner, Text } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { CardsAlbums } from "./components/CardsAlbuns/CardsAlbuns";
import { useState } from "react";

type Props = {
  albums: any;
  searchData?: (data: any) => void;
  allAlbums?: any;
};

export const Albums = ({ albums, searchData, allAlbums }: Props) => {
  console.log("dataSearchfilter", allAlbums);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      search: "",
    },
  });

  const [isSearch, setIsSearch] = useState(false);

  const handleSubmitAlbums = (data: any) => {
    if (searchData) {
      setIsSearch(true);
      searchData(data.search);
    }
  };

  return (
    <Box p="40px" w="100%">
      <Flex w="100%" justify="start" p={{ base: "10px", md: "20px" }}>
        <Text fontSize={{ base: "20px", md: "24px" }}>Albums</Text>
      </Flex>

      <Flex w="400px" mb="40px" m="10px" align="center">
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
              placeholder="Buscar Album"
            />
          )}
        />

        <Button
          onClick={handleSubmit(handleSubmitAlbums)}
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
          <Text fontSize="14px">Buscar</Text>
        </Button>
      </Flex>

      {!albums ? (
        <Flex w="100$" justify="center" align="center" h="100%">
          <Spinner size="lg" color="yellow.900" />
        </Flex>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {isSearch
            ? albums.map((items: any) => {
                console.log(items, "item");
                return (
                  <CardsAlbums
                    bgImage={items.images.map(
                      (item: { url: string }) => item.url
                    )}
                    name={items.name}
                  />
                );
              })
            : allAlbums.albums &&
              allAlbums.albums.map((items: any) => {
                console.log(items, "item");
                return (
                  <CardsAlbums
                    bgImage={items.images.map(
                      (item: { url: string }) => item.url
                    )}
                    name={items.name}
                  />
                );
              })}
        </div>
      )}
    </Box>
  );
};
