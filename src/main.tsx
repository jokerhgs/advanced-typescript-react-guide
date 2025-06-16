import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App";
import { FavoriteList } from "./react-hooks/use-callback";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/use-callback" element={<FavoriteList />} />
    </Routes>
  </BrowserRouter>
);
