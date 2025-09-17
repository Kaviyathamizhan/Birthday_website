import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Heart, Home } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-dreamy px-4">
      <div className="text-center max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="card-romantic"
        >
          <motion.div
            className="text-8xl font-handwriting text-love-primary mb-4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            404
          </motion.div>
          
          <Heart className="text-love-primary mx-auto mb-4 animate-heartbeat" size={48} fill="currentColor" />
          
          <h1 className="text-2xl font-handwriting text-love-primary mb-4">
            Oops! This page got lost in love
          </h1>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Even in a world full of love, sometimes we take a wrong turn. 
            Let's get you back to where the magic happens!
          </p>
          
          <motion.a
            href="/"
            className="btn-love inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home size={20} />
            Return to Our Love Story
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;