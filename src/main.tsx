import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App";
import { FavoriteList } from "./react-hooks/use-callback";
import { CommentForm } from "./react-hooks/use-optimistic";
import { Tabs } from "./react-hooks/use-transition";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/use-callback" element={<FavoriteList />} />
      <Route path="/use-optimistic" element={<CommentForm />} />
      <Route path="/use-transition" element={<Tabs />} />
    </Routes>
  </BrowserRouter>
);
