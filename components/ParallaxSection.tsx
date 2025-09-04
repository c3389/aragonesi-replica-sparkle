import React from 'react';
import AnimatedElement from './AnimatedElement';

const ParallaxSection: React.FC = () => {
  return (
    <section className="parallax-bg min-h-[500px] relative flex flex-col items-center justify-center text-white text-center py-20">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 container mx-auto px-6">
        <AnimatedElement>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading">
            Experience True Serenity
          </h2>
        </AnimatedElement>
        <AnimatedElement delay={200}>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
            Discover our world-class spa facilities and exclusive wellness treatments, designed to rejuvenate your mind, body, and soul.
          </p>
        </AnimatedElement>
        <AnimatedElement delay={400}>
          <a href="#" className="inline-block mt-8 bg-white/20 backdrop-blur-sm text-white font-body font-semibold px-8 py-3 rounded-md hover:bg-white/30 transition-colors duration-300 uppercase tracking-wider text-sm">
            Discover Our Spa
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ParallaxSection;
