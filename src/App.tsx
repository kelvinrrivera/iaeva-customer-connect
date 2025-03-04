
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import CasosDeUso from "./pages/CasosDeUso";
import NotFound from "./pages/NotFound";
import "./App.css";

// Crear un único cliente de consulta para toda la aplicación
const queryClient = new QueryClient();

const App = () => {
  // Precargar imágenes críticas
  useEffect(() => {
    const preloadImages = [
      "/lovable-uploads/31e5f6a3-76d4-4c80-88ff-cdcf0ff7290f.png",
      "/lovable-uploads/cd8c2d66-8439-45cc-a904-ebccb8369983.png",
      "/lovable-uploads/39f47b90-761f-4d63-a41c-47282e7b3507.png"
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/casos-de-uso" element={<CasosDeUso />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
