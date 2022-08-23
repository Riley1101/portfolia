import { Box } from "@chakra-ui/react";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Mouse from "@/utils/mouse";
import SmoothScroll from "@/utils/smoothScroll";
const MainContainer = ({ children }) => {
  return (
    <SmoothScroll>
      <Box
        w={["100%", "85%"]}
        mx={"auto"}
        lineHeight="1.7"
        fontFamily={"'Roboto', sans-serif"}
      >
        <Header />
        {children}
        <Footer />
      </Box>
      <Mouse></Mouse>
    </SmoothScroll>
  );
};

export default MainContainer;
