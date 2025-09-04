import React from 'react';
import { GARDEN_IMAGES } from '../constants';
import AnimatedElement from './AnimatedElement';
import OptimizedImage from '../src/components/OptimizedImage';
import { useImagePreloader } from '../src/hooks/useImagePreloader';

interface GardenShowcaseProps {
    id?: string;
}

const GardenShowcase: React.FC<GardenShowcaseProps> = ({ id }) => {
    // Preload garden images for better performance
    const gardenImages = GARDEN_IMAGES.map(item => item.src);
    useImagePreloader(gardenImages);
    
    return (
        <section id={id} className="py-20 md:py-28 bg-[#FAF7F1] overflow-hidden">
             <div className="container mx-auto px-6 text-center mb-12">
                <AnimatedElement>
                    <h2 className="text-4xl md:text-5xl text-[#1a4531]">Garden Space</h2>
                </AnimatedElement>
                <AnimatedElement delay={150}>
                    <h3 className="text-2xl md:text-3xl text-[#3d6f58] mt-2 mb-4">Eventi da ricordare</h3>
                </AnimatedElement>
                <AnimatedElement delay={300}>
                    <p className="max-w-3xl mx-auto text-base text-gray-600">
                        Situato all’interno dell’affascinante corte verde del Relais il nostro garden space è un <strong>giardino nel giardino</strong>, un salotto glamour con un’atmosfera suggestiva ed elegante adatto ad ogni tipo di evento.
                    </p>
                </AnimatedElement>
                 <AnimatedElement delay={450}>
                    <a href="#" className="inline-block mt-6 bg-[#335b48] text-white px-8 py-3 rounded-md font-body text-sm font-semibold hover:bg-[#1a4531] transition-colors">
                        Scopri
                    </a>
                </AnimatedElement>
            </div>
            <div className="flex flex-col md:flex-row">
                {GARDEN_IMAGES.map((item, index) => (
                    <AnimatedElement key={item.id} className="w-full md:w-1/3 h-96" delay={index * 150}>
                        <div className="group relative overflow-hidden h-full">
                            <OptimizedImage 
                                src={item.src} 
                                alt={`Garden space view ${item.id}`}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                        </div>
                    </AnimatedElement>
                ))}
            </div>
        </section>
    );
};

export default GardenShowcase;