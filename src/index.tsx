import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraBaseProvider } from "@chakra-ui/react";

import "./styles/globals.css";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraBaseProvider resetCSS theme={theme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);

reportWebVitals();
