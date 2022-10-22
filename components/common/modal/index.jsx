import "@algolia/autocomplete-theme-classic";
import { Kbd, Text } from "@chakra-ui/react";

function NavigationModal({ onOpen }) {
  return (
    <>
      <Text cursor={"pointer"} onClick={onOpen}>
        <Kbd>ctrl </Kbd> + <Kbd>K</Kbd>
      </Text>
    </>
  );
}
export default NavigationModal;
