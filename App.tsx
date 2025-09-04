import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import FeatureSection from './components/FeatureSection';
import Rooms from './components/Rooms';
import GardenShowcase from './components/GardenShowcase';
import ParallaxSection from './components/ParallaxSection';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#FAF7F1] text-[#5E5D5C]">
      <Header />
      <main>
        <Hero />
        <Welcome id="welcome" />
        <FeatureSection id="servizi" />
        <Rooms id="camere" />
        <GardenShowcase id="giardino" />
        <ParallaxSection />
        <Location id="location" />
      </main>
      <Footer />
    </div>
  );
};

export default App;