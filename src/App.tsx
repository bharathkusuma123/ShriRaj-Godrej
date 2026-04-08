import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Wallfort from "./pages/Walfort";
import PropNest from "./pages/PropNest";
import ShrirajProperty from "./pages/ShrirajProperty"; // Import the new component
import ShrirajPropertyPrivacyPolicy from "./pages/ShrirajProperty_PrivacyPolicy";
import ShrirajPropertyTermsAndConditions from "./pages/ShrirajProperty_TermsAndConditions"
const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
         
           <Route path="/godrej" element={<Index />} />
   <Route path="/propnest" element={<PropNest />} /> 
    <Route path="/wallfort" element={<Wallfort />} />
    <Route path="/" element={<ShrirajProperty />} /> {/* Add new route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
           <Route path="/Shriraj-privacy-policy" element={<ShrirajPropertyPrivacyPolicy />} />
           <Route path="/Shriraj-terms&conditions" element={<ShrirajPropertyTermsAndConditions />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
