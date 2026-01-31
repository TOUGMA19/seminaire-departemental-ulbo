import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Thematics from "./pages/Thematics";
import Committees from "./pages/Committees";
import Program from "./pages/Program";
import Registration from "./pages/Registration";
import Submission from "./pages/Submission";
import Dates from "./pages/Dates";
import Venue from "./pages/Venue";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/thematiques" element={<Thematics />} />
          <Route path="/comites" element={<Committees />} />
          <Route path="/programme" element={<Program />} />
          <Route path="/inscription" element={<Registration />} />
          <Route path="/soumission" element={<Submission />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/lieu" element={<Venue />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
