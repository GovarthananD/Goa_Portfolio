import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./navbar";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // loader duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden relative">
      {/* ===== Loader Overlay ===== */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            {/* Center Line Expand Animation */}
            <motion.div
              initial={{ height: 0, width: "10px", backgroundColor: "#fff" }}
              animate={{
                height: "100vh",
                transition: { duration: 1.5, ease: "easeInOut" },
              }}
              exit={{
                scaleX: 100,
                transition: { duration: 1.2, ease: "easeInOut" },
              }}
              className="bg-indigo-500"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Website Content ===== */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Navbar />
        </motion.div>
      )}
    </div>
  );
}
