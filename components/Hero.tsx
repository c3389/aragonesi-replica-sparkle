import React, { useState, useEffect, useCallback } from 'react';
import OptimizedImage from '../src/components/OptimizedImage';
import { HERO_IMAGES } from '../constants';
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
        <section className="relative h-screen overflow-hidden">
            {/* Background Images Gallery */}
            <div className="absolute inset-0 w-full h-full">
                {HERO_IMAGES.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={src}
                            alt={`Vista del Relais Corte degli Aragonesi ${index + 1}`}
                            loading="eager"
                            className="w-full h-full object-cover"
                            onLoad={() => console.log(`Hero image ${index + 1} displayed successfully`)}
                            onError={() => console.error(`Error loading hero image ${index + 1}: ${src}`)}
                        />
                    </div>
                ))}
            </div>
            {/* Debug indicator */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded">
                {currentIndex + 1} / {HERO_IMAGES.length}
            </div>
        </section>
    );
};

export default Hero;