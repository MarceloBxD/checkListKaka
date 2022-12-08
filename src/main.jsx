import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProvider } from "../src/contexts/ContextApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <AppProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppProvider>
  </ChakraProvider>
);
