import "./App.css";
import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import { AnimatePresence, motion } from "framer-motion";
import Data from "./pages/Data";
import NotFound from "./pages/NotFound"
import Radio from "./pages/Radio";
import MapPage from "./pages/MapPage";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* AnimatePresence needs a keyed wrapper for route transitions */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/inventory" element={<PageWrapper><Inventory /></PageWrapper>} />
        <Route path="/data" element={<PageWrapper><Data/></PageWrapper>} />
        <Route path="/map" element={<PageWrapper><MapPage/></PageWrapper>} />
        <Route path="/radio" element={<PageWrapper><Radio/></PageWrapper>} /> 
        <Route path="*" element={<PageWrapper><NotFound/></PageWrapper>} /> 
      </Routes>
    </AnimatePresence>
  );
};


function App() {
  return (
   <Router>
      <div className="border">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
