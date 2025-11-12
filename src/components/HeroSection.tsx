import { motion } from 'framer-motion';
import { Heart, Sparkles, Gift } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const currentDate = new Date();
  const birthday = new Date('0000-00-00'); // September 17, 2024
  const isToday = currentDate.toDateString() === birthday.toDateString();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-love-primary/20 via-love-secondary/30 to-love-accent/20" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {i % 3 === 0 ? (
              <Heart className="text-white/30" size={20 + Math.random() * 15} fill="currentColor" />
            ) : i % 3 === 1 ? (
              <Sparkles className="text-yellow-300/40" size={15 + Math.random() * 10} />
            ) : (
              <div className="w-2 h-2 bg-white/40 rounded-full" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Birthday Badge */}
          {isToday && (
            <motion.div
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-romantic mb-6"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 10px 30px -10px rgba(220, 38, 127, 0.3)',
                  '0 15px 40px -10px rgba(220, 38, 127, 0.5)',
                  '0 10px 30px -10px rgba(220, 38, 127, 0.3)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Gift className="text-love-primary" size={20} />
              <span className="text-love-primary font-semibold">🎉 Happy Birthday! 🎉</span>
            </motion.div>
          )}

          {/* Main Heading */}
          <motion.h1
            className="text-6xl md:text-8xl font-handwriting text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Happy Birthday
          </motion.h1>

          <motion.div
            className="text-4xl md:text-6xl font-handwriting text-gradient-love mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            My Beautiful Love ❤️
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto drop-shadow-lg font-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Today we celebrate the most wonderful person in my world. 
            Every moment with you is a gift, and today is extra special.
          </motion.p>

          {/* Date Display */}
          <motion.div
            className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <p className="text-white text-lg font-handwriting">
              September 17th, 2025 ✨
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            <motion.button
              className="btn-love text-lg px-8 py-4"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="flex items-center gap-2">
                Explore Our Love Story
                <Heart size={20} fill="currentColor" />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
