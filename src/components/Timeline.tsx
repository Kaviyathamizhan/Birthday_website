import { motion } from 'framer-motion';
import { Calendar, Heart, MapPin, Star } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      date: "",
      title: "",
      description: "",
      icon: Heart,
      color: "text-love-primary"
    },
    {
      date: "",
      title: "", 
      description: "",
      icon: Calendar,
      color: "text-love-secondary"
    },
    {
      date: "",
      title: "",
      description: "",
      icon: MapPin,
      color: "text-love-accent"
    },
    {
      date: "",
      title: "",
      description: "",
      icon: Star,
      color: "text-love-primary"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-handwriting text-gradient-love mb-4">
            Our Love Story Timeline
          </h2>
          <p className="text-lg text-muted-foreground">
            Every milestone that led us to this beautiful moment
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-love-primary via-love-secondary to-love-accent rounded-full" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <motion.div
                    className="card-dreamy p-6"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? 'justify-end' : 'justify-start'
                    }`}>
                      <div className={`${milestone.color}`}>
                        <milestone.icon size={24} />
                      </div>
                      <span className="font-handwriting text-2xl text-love-primary">
                        {milestone.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline node */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-love-primary to-love-secondary shadow-glow-love"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-love-primary/20 to-love-secondary/20 animate-ping" />
                </div>

                {/* Spacer */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
