import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
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
