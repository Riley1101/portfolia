import AutoComplete from "@/components/common/search/AutoComplete";
import "@algolia/autocomplete-theme-classic/dist/theme.css";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Tooltip,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useHotkeys } from "react-hotkeys-hook";
import { ImCommand } from "react-icons/im";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onClose, onOpen } = useDisclosure();
  useHotkeys("ctrl+/", () => onOpen());

  return (
    <Box
      display="flex"
      w="full"
      h="5em"
      gap="4"
      p="4"
      flexDirection="row"
      alignItems={"center"}
    >
      <Link href="/">
        <Heading mr="auto" cursor={"pointer"} fontSize={"2xl"}>
          ArkarDev
        </Heading>
      </Link>

      <Modal isOpen={isOpen} onClose={onClose} size={["xs", "lg"]}>
        <ModalOverlay />
        <ModalContent maxH={"400px"} overflowY="auto">
          <ModalBody px="1em">
            <AutoComplete />
          </ModalBody>
        </ModalContent>
      </Modal>

      <HStack spacing={"4"}>
        <Tooltip hasArrow label="Ctrl + /" placement="auto">
          <IconButton onClick={onOpen}>
            <ImCommand />
          </IconButton>
        </Tooltip>

        <IconButton
          onClick={toggleColorMode}
          aria-label="Menu"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />
      </HStack>
    </Box>
  );
};

export default Header;
