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
        <section className="relative h-screen flex flex-col items-center justify-center text-white">
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
            <div className="absolute inset-0 bg-black opacity-30"></div>
            
            <div className="relative z-10 flex-grow w-full"></div>

            <div className="relative z-10 w-full px-4 pb-8 md:pb-12">
                <BookingWidget />
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
                <ChevronDownIcon className="w-8 h-8 text-white" />
            </div>
        </section>
    );
};

export default Hero;