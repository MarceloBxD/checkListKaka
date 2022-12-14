import "./App.css";
import { Header } from "./components/Header/Header";
import { Flex, Spinner } from "@chakra-ui/react";
import { ContainerTable } from "./components/ContainerTable/ContainerTable";
import backgroundImg from "./assets/images/background.jpg";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(undefined);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
      {loading ? (
        <Flex w="100vw" h="100vh" justify="center" align="center">
          <Spinner color="white" size="xl" />
        </Flex>
      ) : (
        <>
          <Header />
          <ContainerTable />
        </>
      )}
    </Flex>
  );
}

export default App;
