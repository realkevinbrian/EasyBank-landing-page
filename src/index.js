import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./index.css";
import theme, { GlobalTheme } from "./components/Theme";

ReactDOM.render(
  <React.StrictMode>
    <GlobalTheme />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
