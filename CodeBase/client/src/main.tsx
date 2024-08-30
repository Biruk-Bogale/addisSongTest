import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
        <Toaster
          visibleToasts={1}
          position="top-right"
          duration={2000}
          richColors
          closeButton
          theme="light"
        />
      </QueryClientProvider>
    </Router>
  </StrictMode>
);
