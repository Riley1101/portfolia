import { Kbd } from "@chakra-ui/react";
import { Text, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import "@algolia/autocomplete-theme-classic";
import { SearchIcon } from "@chakra-ui/icons";
import { connectSearchBox } from "instantsearch.js/es/connectors";
const Search = connectSearchBox(({ refine }) => {
  return (
    <InputGroup w="full">
      <Input
        placeholder="Search"
        onChange={(e) => refine(e.currentTarget.value)}
        type="search"
      />
      <InputRightElement>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  );
});

function NavigationModal({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Text as="span" cursor={"pointer"} onClick={onOpen}>
        <Kbd>ctrl </Kbd> + <Kbd>K</Kbd>
      </Text>
    </>
  );
}
export default NavigationModal;
