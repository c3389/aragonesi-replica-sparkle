import React from 'react';

const Location: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-[#FAF7F1]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl text-[#1a4531]">
                        Vieni a trovarci, nel cuore di Ischia.
                    </h2>
                    <div className="mt-8">
                        <a href="#" className="inline-block bg-secondary text-white px-8 py-3 rounded-md font-body text-sm font-semibold hover:bg-text-secondary transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            Scopri
                        </a>
                    </div>
                </div>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                    <img src="https://maps.googleapis.com/maps/api/staticmap?center=40.7402522,13.9504552&zoom=15&size=1200x600&maptype=roadmap&markers=color:0x1a4531%7Clabel:H%7C40.7402522,13.9504552&style=feature:poi.business|visibility:off&key=YOUR_API_KEY" alt="Map of Relais Corte degli Aragonesi in Ischia" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    );
};

export default Location;
