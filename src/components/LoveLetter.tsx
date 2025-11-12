import { motion } from 'framer-motion';
import { Heart, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const LoveLetter = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [showMore, setShowMore] = useState(false);

  const letterText = [
    "My Dearest Love,",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];

  const moreText = [
    "",
    "",
    "",
    "",
    "",
    ""
  ];

  useEffect(() => {
    if (showLetter && !showMore) {
      typeWriter(letterText);
    } else if (showLetter && showMore) {
      typeWriter([...moreText]);
    }
  }, [showLetter, showMore]);

  const typeWriter = (textArray: string[]) => {
    const fullText = textArray.join('\n');
    setCurrentText('');
    
    let i = 0;
    const typing = setInterval(() => {
      setCurrentText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typing);
      }
    }, 50);
  };

  return (
    <section className="py-20 px-4 bg-gradient-dreamy">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-handwriting text-gradient-love mb-4">
            A Letter From My Heart
          </h2>
          <p className="text-lg text-muted-foreground">
            Words can never fully express what you mean to me
          </p>
        </motion.div>

        <div className="relative">
          {!showLetter ? (
            <motion.div
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="inline-block p-8 rounded-full bg-gradient-to-r from-love-primary to-love-secondary shadow-romantic mb-6"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={64} className="text-white" />
              </motion.div>
              <motion.button
                onClick={() => setShowLetter(true)}
                className="btn-love text-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Open My Heart ❤️
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              className="card-romantic max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4">
                  <Heart className="text-love-primary animate-heartbeat" size={32} fill="currentColor" />
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <pre className="whitespace-pre-wrap font-serif text-base leading-relaxed text-foreground font-normal">
                    {currentText}
                    <span className="animate-pulse">|</span>
                  </pre>
                </div>

                {currentText.length > letterText.join('\n').length - 10 && !showMore && (
                  <motion.div
                    className="text-center mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <motion.button
                      onClick={() => setShowMore(true)}
                      className="btn-dreamy"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Click to reveal more love 💕
                    </motion.button>
                  </motion.div>
                )}

                <div className="absolute -bottom-4 -right-4">
                  <Heart className="text-love-accent animate-float" size={24} fill="currentColor" />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
