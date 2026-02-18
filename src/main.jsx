import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MusicProvider } from "./context/MusicContext.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <BrowserRouter>
    <MusicProvider>
      <App />
    </MusicProvider>
   </BrowserRouter>
  </StrictMode>
);
