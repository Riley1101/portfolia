import { Box } from "@chakra-ui/react";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Mouse from "@/utils/mouse";
import Analytics from "@/utils/analytics";
const MainContainer = ({ children }) => {
  return (
    <Box
      w={["100%", "70%"]}
      mx={"auto"}
      lineHeight="1.7"
      overflowX="hidden"
      overflowY="auto"
      fontFamily={"'Roboto', sans-serif"}
    >
      <Analytics />
      <Header />
      {children}
      <Footer />
      <Mouse></Mouse>
    </Box>
  );
};

export default MainContainer;
