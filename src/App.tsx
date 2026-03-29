import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";

// Crear un cliente
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroSection />
      <MenuSection />
    </QueryClientProvider>
  );
}

export default App;