import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { App } from "components";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { DataProvider, queryClient } from "./providers";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TooltipProvider>
      <QueryClientProvider client={queryClient}>
        <DataProvider>
          <App />
        </DataProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </TooltipProvider>
  </StrictMode>,
);
