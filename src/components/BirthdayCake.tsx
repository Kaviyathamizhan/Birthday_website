import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import birthdayCakeImg from '@/assets/birthday-cake.jpg';

const BirthdayCake = () => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showWish, setShowWish] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const blowCandles = () => {
    setCandlesLit(false);
    setShowWish(true);
    setShowConfetti(true);
    
    // Hide confetti after animation
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  const lightCandles = () => {
    setCandlesLit(true);
    setShowWish(false);
  };

  return (
    <section className="py-20 px-4 bg-gradient-purple">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl font-handwriting text-white mb-4">
            Make a Wish, Beautiful! ✨
          </h2>
          <p className="text-lg text-white/80">
            Click on the cake to blow out the candles
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Confetti Animation */}
          <AnimatePresence>
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none z-20">
                {Array.from({ length: 50 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: ['#ff69b4', '#ff1493', '#da70d6', '#ffd700', '#ff6347'][i % 5],
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    initial={{ scale: 0, y: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      y: [-100, -200, -300],
                      x: [0, Math.random() * 200 - 100, Math.random() * 400 - 200],
                      rotate: [0, 360, 720],
                    }}
                    transition={{
                      duration: 3,
                      ease: "easeOut",
                      delay: Math.random() * 0.5,
                    }}
                    exit={{ opacity: 0 }}
                  />
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Cake Container */}
          <motion.div
            className="relative cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={candlesLit ? blowCandles : lightCandles}
          >
            <div className="card-romantic overflow-hidden">
              <img
                src={birthdayCakeImg}
                alt="Birthday Cake"
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Candle Flames */}
              {candlesLit && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex gap-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-4 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Smoke effect when candles are blown out */}
              {!candlesLit && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex gap-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-8 bg-gradient-to-t from-gray-400 to-transparent rounded-full opacity-60"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 0.8, 0],
                        y: [0, -20, -40],
                        scale: [0.5, 1, 1.5],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Interactive hint */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <p className="text-sm font-medium text-gray-700">
                  {candlesLit ? "💨 Blow out the candles!" : "🕯️ Light them again!"}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Birthday wish message */}
          <AnimatePresence>
            {showWish && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.8 }}
                className="mt-8"
              >
                <div className="card-romantic bg-gradient-to-r from-love-primary/10 to-love-secondary/10">
                  <h3 className="text-2xl font-handwriting text-love-primary mb-4">
                    Happy Birthday, My Love! 🎉
                  </h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    May all your dreams come true, just like you made all of mine come true. 
                    Here's to another year of love, laughter, and beautiful memories together! ❤️
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BirthdayCake;