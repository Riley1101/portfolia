import React from "react";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Kbd,
  Text,
  Modal,
  ModalBody,
  InputGroup,
  Input,
  InputRightElement,
  ModalOverlay,
  ModalContent,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { connectSearchBox } from "react-instantsearch-dom";
function Search({ refine }) {
  return (
    <InputGroup w="full">
      <Input
        placeholder="Search"
        type="search"
        variant={"outline"}
        onChange={(e) => refine(e.currentTarget.value)}
      />
      <InputRightElement>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  );
}
export default connectSearchBox(Search);
