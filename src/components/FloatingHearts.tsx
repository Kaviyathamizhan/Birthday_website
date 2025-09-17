import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  size: number;
  color: string;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const colors = ['text-love-primary', 'text-love-secondary', 'text-love-accent'];
      const newHearts = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        size: Math.random() * 20 + 20,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className={`absolute ${heart.color}`}
          style={{
            left: `${heart.left}%`,
            bottom: '-60px',
          }}
          animate={{
            y: -window.innerHeight - 60,
            x: [0, 30, -30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;