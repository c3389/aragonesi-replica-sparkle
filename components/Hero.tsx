import React, { useState, useEffect, useCallback } from 'react';
import BookingWidget from './BookingWidget';
import OptimizedImage from '../src/components/OptimizedImage';
import { HERO_IMAGES } from '../constants';
import { ChevronDownIcon } from './Icons';
import { useImagePreloader } from '../src/hooks/useImagePreloader';

const Hero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Preload all hero images for better performance
    useImagePreloader(HERO_IMAGES);

    const nextImage = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextImage, 5000);
        return () => clearInterval(timer);
    }, [nextImage]);

    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
            {/* Background Images */}
            <div className="absolute inset-0 w-full h-full">
                {HERO_IMAGES.map((src, index) => (
                    <OptimizedImage
                        key={src}
                        src={src}
                        alt={`Vista del Relais Corte degli Aragonesi ${index + 1}`}
                        loading="eager"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
            </div>
            
            {/* Enhanced Gradient Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
            
            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-white mb-4 drop-shadow-2xl">
                    Relais Corte degli Aragonesi
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed drop-shadow-lg">
                    Un incantevole rifugio nel cuore di Ischia
                </p>
            </div>

            {/* Booking Widget */}
            <div className="relative z-10 w-full px-4 pb-16 md:pb-20">
                <BookingWidget />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
                <ChevronDownIcon className="w-8 h-8 text-white drop-shadow-lg" />
            </div>
        </section>
    );
};

export default Hero;