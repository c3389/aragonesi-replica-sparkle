import React, { useRef } from 'react';
import { Room } from '../types';
import { ROOMS_DATA } from '../constants';
import { ArrowLeftIcon, ArrowRightIcon } from './Icons';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="flex-shrink-0 w-80 md:w-96 group">
      <div className="relative overflow-hidden rounded-lg">
        <img src={room.image} alt={room.title} className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-heading text-2xl text-gray-700">{room.title}</h3>
      </div>
    </div>
  );
};

const RoomsCarousel: React.FC<{ rooms: Room[] }> = ({ rooms }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };
    
    return (
        <div className="relative">
            <div ref={scrollRef} className="flex space-x-8 overflow-x-auto pb-4 no-scrollbar">
                {rooms.map(room => <RoomCard key={room.id} room={room} />)}
            </div>
            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 justify-between w-full pointer-events-none -mt-12 px-4">
                 <button onClick={() => scroll('left')} className="pointer-events-auto -ml-12 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition">
                    <ArrowLeftIcon />
                </button>
                <button onClick={() => scroll('right')} className="pointer-events-auto -mr-12 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition">
                    <ArrowRightIcon />
                </button>
            </div>
        </div>
    );
};


const Rooms: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#EEDFEA]">
      <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl text-[#1a4531] mt-2">Camere & Suite</h2>
            <h3 className="text-2xl md:text-3xl text-[#3d6f58] mt-2 mb-4">Luxury e Comfort</h3>
            <p className="text-base text-gray-600">
              Suddivise in varie tipologie, le nostre camere soddisfano le esigenze di coppie in cerca di un soggiorno romantico, di famiglie e gruppi di amici, offrendo diverse <strong>soluzioni</strong> e <strong>servizi</strong> a seconda delle necessità.
            </p>
            <a href="#" className="inline-block mt-6 bg-secondary text-white px-8 py-3 rounded-md font-body text-sm font-semibold hover:bg-text-secondary transition-colors">
                Scopri
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
           <RoomsCarousel rooms={ROOMS_DATA} />
        </div>
    </section>
  );
};

export default Rooms;
