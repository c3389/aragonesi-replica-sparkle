import React, { useState } from 'react';
import { CalendarIcon } from './Icons';

const BookingWidget: React.FC = () => {
    const today = new Date().toISOString().split('T')[0];
    
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrow = tomorrowDate.toISOString().split('T')[0];

    const [checkIn, setCheckIn] = useState(today);
    const [checkOut, setCheckOut] = useState(tomorrow);
    
    const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCheckInDate = e.target.value;
        setCheckIn(newCheckInDate);

        const checkInDate = new Date(newCheckInDate);
        const checkOutDate = new Date(checkOut);

        if (checkInDate >= checkOutDate) {
            const nextDay = new Date(checkInDate);
            nextDay.setDate(nextDay.getDate() + 2); // Set to day after check-in
            setCheckOut(nextDay.toISOString().split('T')[0]);
        }
    };
    
    const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCheckOutDate = e.target.value;
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(newCheckOutDate);
        if (checkOutDate > checkInDate) {
             setCheckOut(newCheckOutDate);
        }
    }

    return (
        <div className="bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-2xl w-full max-w-4xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-end">
                <div className="lg:col-span-2">
                    <label htmlFor="check-in" className="text-xs font-bold text-gray-500 block mb-1 uppercase tracking-wider">Check-in</label>
                    <div className="relative">
                         <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                         <input
                            type="date"
                            id="check-in"
                            value={checkIn}
                            min={today}
                            onChange={handleCheckInChange}
                            className="font-body bg-gray-50 border border-gray-300 text-gray-700 font-semibold w-full focus:outline-none focus:ring-2 focus:ring-[#3D6F58] focus:border-transparent rounded-md py-2.5 pl-10 pr-3 date-input"
                            aria-label="Check-in date"
                        />
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <label htmlFor="check-out" className="text-xs font-bold text-gray-500 block mb-1 uppercase tracking-wider">Check-out</label>
                    <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                        <input
                            type="date"
                            id="check-out"
                            value={checkOut}
                            min={checkIn}
                            onChange={handleCheckOutChange}
                            className="font-body bg-gray-50 border border-gray-300 text-gray-700 font-semibold w-full focus:outline-none focus:ring-2 focus:ring-[#3D6F58] focus:border-transparent rounded-md py-2.5 pl-10 pr-3 date-input"
                            aria-label="Check-out date"
                        />
                    </div>
                </div>
                
                <div className="lg:col-span-1">
                    <button type="submit" className="w-full bg-[#335b48] text-white font-bold py-3 px-6 rounded-md hover:bg-[#1a4531] transition duration-300 text-base font-body uppercase tracking-wider">
                        Verifica
                    </button>
                </div>
            </form>
            <style>{`
                .date-input::-webkit-calendar-picker-indicator {
                    cursor: pointer;
                    opacity: 0;
                    position: absolute;
                    right: 0;
                    width: 100%;
                }
            `}</style>
        </div>
    );
};

export default BookingWidget;