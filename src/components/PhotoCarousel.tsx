import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useState } from 'react';

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample photos - replace with real photos
  const photos = [
    {
      url: "/photo1.jpg",
      caption: "Cutieeww babyyy ❤️"
    },
    {
      url: "/photo2.jpg",
      caption: "En kanne pattudum polaaa 🤌🏻"
    },
    {
      url: "/photo3.jpg",
      caption: "The Asthetic One (My All Time Fav) 💖"
    },
    {
      url: "/photo4.jpg",
      caption: "Apdi Pakkathaa Chellam (I'm Dying) 💕"
    },
    {
      url: "/photo5.jpg",
      caption: "Babyyy Doll 🥰"
    },
    {
      url: "/photo6.jpg",
      caption: "Our first adventure together 😍"
    },
    {
      url: "/photo7.jpg",
      caption: "So called Surprise Meet 💝"
    },
    {
      url: "/photo8.jpg",
      caption: "Bujukuuu Bujukuuu Bujukuuu 🫶🏻"
    },
    { 
      url: "/photo9.jpg",
      caption: "Pookiesss 🎀"
    },
    {
      url: "/photo10.jpg",
      caption: "Swagyy Couple 😎 "
    },
    {
      url: "/photo11.jpg",
      caption: "I wont leave You babyyy ❣️ "
    },
    {
      url: "/photo12.jpg",
      caption: "Pre wedding shoot in AI 😘"
    }
  ];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-handwriting text-gradient-love mb-4">
            Our Beautiful Memories
          </h2>
          <p className="text-lg text-muted-foreground">
            Every moment with you is a treasure worth keeping
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="card-romantic relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <motion.img
                key={currentIndex}
                src={photos[currentIndex].url}
                alt={photos[currentIndex].caption}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              <motion.div
                className="absolute bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-white text-xl font-handwriting drop-shadow-lg">
                  {photos[currentIndex].caption}
                </p>
              </motion.div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>
            
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="text-white" size={24} />
            </button>

            {/* Heart reaction */}
            <motion.button
              className="absolute top-4 right-4 text-white hover:text-love-primary transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart size={28} fill="currentColor" />
            </motion.button>
          </motion.div>

          {/* Photo indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-love-primary scale-125' 
                    : 'bg-love-primary/30 hover:bg-love-primary/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;