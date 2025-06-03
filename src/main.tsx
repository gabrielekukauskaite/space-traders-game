import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { OpenAPI as OpenAPIConfig } from "../openapi/requests/core/OpenAPI";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { setupFocusManager } from "./utils/setupFocusManager";
import "./index.css";

const agentKey = import.meta.env.VITE_SPACE_TRADERS_AGENT_KEY;

OpenAPIConfig.HEADERS = {
  Authorization: `Bearer ${agentKey}`,
};

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

setupFocusManager();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);
