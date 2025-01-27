import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Sedgwick Ave Display, cursive", // Google Font'u burada belirtin
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* ThemeProvider ile temayı uygulayın */}
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
      <App />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
