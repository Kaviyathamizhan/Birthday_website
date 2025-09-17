import { motion } from 'framer-motion';
import { Calendar, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Next anniversary date - adjust this to your actual anniversary
  const targetDate = new Date('2026-03-14T00:00:00'); // Example: December 17, 2024

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, icon: Calendar },
    { label: 'Hours', value: timeLeft.hours, icon: Heart },
    { label: 'Minutes', value: timeLeft.minutes, icon: Heart },
    { label: 'Seconds', value: timeLeft.seconds, icon: Heart }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-dreamy">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl font-handwriting text-gradient-love mb-4">
            Counting Down to Forever
          </h2>
          <p className="text-lg text-muted-foreground">
            Every second brings us closer to our next milestone
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="card-romantic text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="mb-4">
                <unit.icon className="text-love-primary mx-auto mb-2" size={32} />
                <motion.div
                  className="text-4xl font-bold text-gradient-love"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ 
                    duration: unit.label === 'Seconds' ? 1 : 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.div>
              </div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {unit.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="card-dreamy max-w-2xl mx-auto p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="text-love-primary animate-heartbeat" size={24} fill="currentColor" />
            <h3 className="text-xl font-handwriting text-love-primary">
              Next Milestone
            </h3>
            <Heart className="text-love-primary animate-heartbeat" size={24} fill="currentColor" />
          </div>
          <p className="text-base text-foreground">
            Our next anniversary is approaching! Every day with you is a celebration, 
            but this special date marks another year of our beautiful journey together. 
            I can't wait to create more memories with you! 💕
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;