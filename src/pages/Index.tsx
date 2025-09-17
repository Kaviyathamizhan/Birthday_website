import HeroSection from '@/components/HeroSection';
import FloatingHearts from '@/components/FloatingHearts';
import PhotoCarousel from '@/components/PhotoCarousel';
import LoveLetter from '@/components/LoveLetter';
import Timeline from '@/components/Timeline';
import BirthdayCake from '@/components/BirthdayCake';
import CountdownTimer from '@/components/CountdownTimer';
import SurpriseSection from '@/components/SurpriseSection';
import MusicPlayer from '@/components/MusicPlayer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dreamy">
      {/* Global floating hearts animation */}
      <FloatingHearts />
      
      {/* Music player - floating on all sections */}
      <MusicPlayer />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Photo Carousel Section */}
      <div id="memories">
        <PhotoCarousel />
      </div>
      
      {/* Love Letter Section */}
      <LoveLetter />
      
      {/* Timeline Section */}
      <Timeline />
      
      {/* Birthday Cake Section */}
      <BirthdayCake />
      
      {/* Countdown Timer Section */}
      <CountdownTimer />
      
      {/* Surprise Section */}
      <SurpriseSection />
      
      {/* Footer */}
      <footer className="py-12 px-4 text-center bg-gradient-to-r from-love-primary to-love-secondary">
        <div className="max-w-2xl mx-auto">
          <p className="text-white text-lg font-handwriting mb-4">
            Made with endless love for the most amazing person in my world ❤️
          </p>
          <div className="flex justify-center space-x-4 text-white/80">
            <span>💕</span>
            <span>September 17, 2025</span>
            <span>💕</span>
          </div>
          <p className="text-white/60 text-sm mt-4 font-serif">
            Every pixel crafted with love, every animation filled with my heart
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;