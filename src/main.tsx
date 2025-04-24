import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/index.css";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./data/queryClient";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
