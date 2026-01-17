import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectDPS from "./pages/ProjectDPS";
import ProjectRobotics from "./pages/ProjectRobotics";
import ProjectVirtualKeyboard from "./pages/ProjectVirtualKeyboard";
import ProjectEMG from "./pages/ProjectEMG";
import ProjectAllscoo from "./pages/ProjectAllscoo";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects/dps" element={<ProjectDPS />} />
        <Route path="/projects/robotics" element={<ProjectRobotics />} />
        <Route path="/projects/virtual-keyboard" element={<ProjectVirtualKeyboard />} />
        <Route path="/projects/emg" element={<ProjectEMG />} />
        <Route path="/projects/allscoo" element={<ProjectAllscoo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
