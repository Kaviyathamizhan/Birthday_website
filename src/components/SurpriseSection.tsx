import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Play, Gift } from 'lucide-react';
import { useState } from 'react';

const SurpriseSection = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [heartClicked, setHeartClicked] = useState(false);

  // Sample video URL - replace with your actual surprise video
  const videoUrl = import.meta.env.VITE_VIDEO_URL;

  const handleHeartClick = () => {
    setHeartClicked(true);
    setTimeout(() => {
      setShowSurprise(true);
    }, 1000);
  };

  return (
    <section className="py-20 px-4 bg-gradient-purple relative overflow-hidden">
      {/* Background hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <Heart size={20 + Math.random() * 20} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl font-handwriting text-white mb-4">
            A Special Surprise ✨
          </h2>
          <p className="text-lg text-white/80">
            Something magical is waiting for you
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showSurprise ? (
            <motion.div
              key="surprise-button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {!heartClicked ? (
                <motion.div className="inline-block">
                  <motion.button
                    onClick={handleHeartClick}
                    className="group relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      className="bg-white/20 backdrop-blur-sm rounded-full p-8 border-2 border-white/30"
                      whileHover={{ borderColor: "rgba(255,255,255,0.8)" }}
                    >
                      <Heart 
                        className="text-white group-hover:text-red-300 transition-colors duration-300" 
                        size={80} 
                        fill="currentColor" 
                      />
                    </motion.div>
                    
                    <motion.div
                      className="absolute -inset-4 rounded-full border-2 border-white/20"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.button>
                  
                  <motion.p
                    className="text-white text-xl font-handwriting mt-6"
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    Click if you love me ❤️
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.5, 1] }}
                  transition={{ duration: 1 }}
                  className="text-center"
                >
                  <div className="relative inline-block">
                    <Gift className="text-white animate-bounce" size={100} />
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="w-full h-full border-4 border-white/50 rounded-full" />
                    </motion.div>
                  </div>
                  <p className="text-white text-2xl font-handwriting mt-6">
                    Preparing your surprise... ✨
                  </p>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="surprise-content"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <div className="card-romantic overflow-hidden">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="mb-6"
                >
                  <h3 className="text-3xl font-handwriting text-gradient-love mb-4">
                    A Message From My Heart 💕
                  </h3>
                  <p className="text-foreground text-lg leading-relaxed mb-6">
                    Here's a special video message just for you, my love. 
                    Every frame was made with all the love in my heart.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="rounded-2xl overflow-hidden shadow-romantic bg-gradient-to-br from-love-primary/10 to-love-secondary/10 p-4"
                >
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-handwriting text-love-primary mb-2">
                      Your Special Video Message 🎥💕
                    </h4>
                    <p className="text-foreground mb-4">
                      A heartfelt message created just for you, my love
                    </p>
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <video
                      controls
                      className="w-full h-auto max-h-96 object-cover"
                      poster="https://via.placeholder.com/800x450/ff69b4/ffffff?text=Click+Play+for+Your+Surprise+💕"
                    >
                      <source src={videoUrl} type="video/mp4" />
                      <p className="text-foreground p-4">
                        Your browser doesn't support video playback. 
                        <a href={videoUrl} className="text-love-primary underline ml-1">
                          Download the video here
                        </a>
                      </p>
                    </video>
                  </div>
                  
                  <div className="mt-6 bg-gradient-to-r from-love-primary/20 to-love-secondary/20 rounded-xl p-6">
                    <p className="text-love-primary font-handwriting text-lg">
                      "Every day with you is like a beautiful movie, 
                      and today we celebrate the most important scene - your birthday!" 🎬✨
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="mt-6 text-center"
                >
                  <p className="text-love-primary font-handwriting text-xl">
                    Thank you for being the most amazing person in my life ❤️
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SurpriseSection;