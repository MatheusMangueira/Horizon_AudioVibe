import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { CardsAlbums } from "./components/CardsAlbuns/CardsAlbuns";

type Props = {
  searchData?: (data: any) => void;
  allAlbums?: any;
};

export const Albums = ({ searchData, allAlbums }: Props) => {
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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmitAlbums = (data: any) => {
    if (searchData) {
      searchData(data.search);
    }
  };

  return (
    <Box h="100%" p={{ base: "0", lg: "40px" }} w="100%">
      <Flex w="100%" justify="start">
        <Text ml="20px" mt="20px" fontSize={{ lg: "30px", base: "18px" }}>
          Albums
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
              placeholder="Search Album"
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
          <Text fontSize="14px">Search</Text>
        </Button>
      </Flex>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg="gray.900">
          <ModalHeader color="yellow.900">Details</ModalHeader>
          <ModalCloseButton bg="yellow.900" />
          <ModalBody>
            <Text>Nome: </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              _hover={{ bg: "gray.900", color: "yellow.900" }}
              bg="yellow.900"
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {allAlbums &&
          allAlbums.map((items: any) => {
            return (
              <CardsAlbums
                albumModal={onOpen}
                bgImage={items.images.map((item: { url: string }) => item.url)}
                name={items.name}
                release_date={items.release_date}
                total_tracks={items.total_tracks}
                url_spotify={items.uri}
              />
            );
          })}
      </div>
    </Box>
  );
};
