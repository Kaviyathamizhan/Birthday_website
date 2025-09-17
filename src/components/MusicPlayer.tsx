import { motion } from 'framer-motion';
import { Music, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Sample music URL - replace with your actual song
  const musicUrl = "/audio.mp3";

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restriction
          console.log("Autoplay prevented by browser");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => {
        setIsPlaying(false);
      };
      
      audio.addEventListener('ended', handleEnded);
      audio.loop = true; // Loop the music
      
      return () => {
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <>
      {/* Floating Music Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {!showPlayer ? (
          <motion.button
            onClick={() => setShowPlayer(true)}
            className="bg-gradient-to-r from-love-primary to-love-secondary p-4 rounded-full shadow-romantic hover:shadow-glow-love transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Music className="text-white" size={24} />
          </motion.button>
        ) : (
          <motion.div
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-romantic min-w-[280px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-handwriting text-lg text-love-primary">
                Our Song ❤️
              </h3>
              <button
                onClick={() => setShowPlayer(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ×
              </button>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                onClick={togglePlay}
                className="bg-gradient-to-r from-love-primary to-love-secondary p-3 rounded-full text-white shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </motion.button>

              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700">
                  Playing our love song...
                </p>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <motion.div
                    className="bg-gradient-to-r from-love-primary to-love-secondary h-1 rounded-full"
                    animate={{ width: isPlaying ? "100%" : "0%" }}
                    transition={{ duration: 3, repeat: isPlaying ? Infinity : 0 }}
                  />
                </div>
              </div>

              <motion.button
                onClick={toggleMute}
                className="text-gray-600 hover:text-love-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </motion.button>
            </div>

            <p className="text-xs text-gray-500 mt-2 text-center">
              🎵 The soundtrack to our love story
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={musicUrl}
        preload="metadata"
      />
    </>
  );
};

export default MusicPlayer;