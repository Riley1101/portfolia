import "@algolia/autocomplete-theme-classic";
import { Kbd, Text } from "@chakra-ui/react";

function NavigationModal({ onOpen }) {
  return (
    <>
      <Text as="span" cursor={"pointer"} onClick={onOpen}>
        <Kbd>ctrl </Kbd> + <Kbd>K</Kbd>
      </Text>
    </>
  );
}
export default NavigationModal;
