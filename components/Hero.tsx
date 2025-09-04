import React, { useState, useEffect } from 'react';
import BookingWidget from './BookingWidget';
import { HERO_IMAGES } from '../constants';
import { ChevronDownIcon } from './Icons';

const Hero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-white">
            <div className="absolute inset-0 w-full h-full">
                {HERO_IMAGES.map((src, index) => (
                    <img
                        key={src}
                        src={src}
                        alt={`Relais view ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
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