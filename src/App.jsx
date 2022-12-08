import "./App.css";
import { Header } from "./components/Header/Header";
import { Flex } from "@chakra-ui/react";
import { ContainerTable } from "./components/ContainerTable/ContainerTable";
import backgroundImg from "./assets/images/background.jpg";

function App() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
        objectFit: "cover",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <ContainerTable />
    </Flex>
  );
}

export default App;
