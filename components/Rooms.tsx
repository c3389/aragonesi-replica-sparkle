import React, { useRef } from 'react';
import { Room } from '../types';
import { ROOMS_DATA } from '../constants';
import { ArrowLeftIcon, ArrowRightIcon } from './Icons';
import AnimatedElement from './AnimatedElement';
import OptimizedImage from '../src/components/OptimizedImage';
import { useImagePreloader } from '../src/hooks/useImagePreloader';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="flex-shrink-0 w-80 md:w-96 group">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <OptimizedImage 
          src={room.image} 
          alt={room.title} 
          className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-300" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="font-heading text-2xl text-white drop-shadow-lg">{room.title}</h3>
        </div>
      </div>
    </div>
  );
};

const RoomsCarousel: React.FC<{ rooms: Room[] }> = ({ rooms }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    
    // Preload room images for better performance
    const roomImages = rooms.map(room => room.image);
    useImagePreloader(roomImages);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.75;
            const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };
    
    return (
        <div className="relative">
            <div ref={scrollRef} className="flex space-x-8 overflow-x-auto pb-4 no-scrollbar px-[5vw] md:px-[calc(50vw-560px)]">
                {rooms.map(room => <RoomCard key={room.id} room={room} />)}
            </div>
            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 justify-between w-full pointer-events-none px-4">
                 <button onClick={() => scroll('left')} className="pointer-events-auto bg-white/80 backdrop-blur-sm shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-white transition-all duration-300 transform hover:scale-110">
                    <ArrowLeftIcon />
                </button>
                <button onClick={() => scroll('right')} className="pointer-events-auto bg-white/80 backdrop-blur-sm shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-white transition-all duration-300 transform hover:scale-110">
                    <ArrowRightIcon />
                </button>
            </div>
        </div>
    );
};


const Rooms: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#EEDFEA] overflow-hidden">
      <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <AnimatedElement>
                <h2 className="text-4xl md:text-5xl text-[#1a4531] mt-2">Camere & Suite</h2>
            </AnimatedElement>
            <AnimatedElement delay={150}>
                <h3 className="text-2xl md:text-3xl text-[#3d6f58] mt-2 mb-4">Luxury e Comfort</h3>
            </AnimatedElement>
            <AnimatedElement delay={300}>
                <p className="text-base text-gray-600">
                Suddivise in varie tipologie, le nostre camere soddisfano le esigenze di coppie in cerca di un soggiorno romantico, di famiglie e gruppi di amici, offrendo diverse <strong>soluzioni</strong> e <strong>servizi</strong> a seconda delle necessità.
                </p>
            </AnimatedElement>
            <AnimatedElement delay={450}>
                <a href="#" className="inline-block mt-6 bg-[#335b48] text-white px-8 py-3 rounded-md font-body text-sm font-semibold hover:bg-[#1a4531] transition-colors">
                    Scopri
                </a>
            </AnimatedElement>
          </div>
        </div>
        <div className="w-full">
           <RoomsCarousel rooms={ROOMS_DATA} />
        </div>
    </section>
  );
};

export default Rooms;