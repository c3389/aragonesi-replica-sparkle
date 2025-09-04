import React from 'react';
import AnimatedElement from './AnimatedElement';

interface LocationProps {
    id?: string;
}

const Location: React.FC<LocationProps> = ({ id }) => {
    return (
        <section id={id} className="py-20 md:py-28 bg-[#FAF7F1]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <AnimatedElement>
                        <h2 className="text-4xl md:text-5xl text-text-secondary">
                            Vieni a trovarci, nel cuore di Ischia.
                        </h2>
                    </AnimatedElement>
                    <AnimatedElement delay={200}>
                        <div className="mt-8">
                            <a href="https://maps.app.goo.gl/vTuVNfQJz8HteWZd7" target="_blank" rel="noopener noreferrer" className="inline-block bg-secondary text-white px-8 py-3 rounded-md font-body text-sm font-semibold hover:bg-text-secondary transition-colors">
                                Scopri
                            </a>
                        </div>
                    </AnimatedElement>
                </div>
                <AnimatedElement delay={400} className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg border border-gray-200">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.163351989053!2d13.94788027663363!3d40.74025617139175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13254300f2e05399%3A0x6782294a53696856!2sRelais%20Corte%20degli%20Aragonesi!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Map of Relais Corte degli Aragonesi"
                    ></iframe>
                </AnimatedElement>
            </div>
        </section>
    );
};

export default Location;