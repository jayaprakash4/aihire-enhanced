import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import PracticeInterviewPage from "./pages/PracticeInterviewPage";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  const location = useLocation();

  return (
    <>
      <div className="fixed right-4 top-4 z-50">
        <ThemeToggle />
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard/*" element={<DashboardPage />} />
          <Route path="/practice" element={<PracticeInterviewPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export function PageFade({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.25 }}
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
}
