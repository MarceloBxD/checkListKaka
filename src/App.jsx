import "./App.css";
import { Header } from "./components/Header/Header";
import { Flex } from "@chakra-ui/react";
import { ContainerTable } from "./components/ContainerTable/ContainerTable";

function App() {
  return (
    <Flex
      w="100%"
      h="100vh"
      flexDir="column"
      background="linear-gradient(45deg, teal, #fff)"
    >
      <Header />
      <ContainerTable />
    </Flex>
  );
}

export default App;
