import React from 'react';

const FeatureSection: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-[#ADC4BB] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative flex flex-col lg:flex-row items-center justify-center lg:h-[700px]">
                    
                    {/* Left Image */}
                    <div className="w-full lg:w-1/2 lg:absolute lg:left-0 lg:top-0 h-80 lg:h-full flex-shrink-0">
                         <img 
                            src="https://cdn.blastness.biz/media/1407/gallery/thumbs/full/768_camera-classic-giardino2.jpg" 
                            alt="Serene garden view" 
                            className="w-full h-full object-cover grayscale"
                         />
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-7/12 lg:absolute lg:right-0 lg:bottom-0 mt-8 lg:mt-0">
                        <div className="relative">
                           <img 
                                src="https://cdn.blastness.biz/media/1407/gallery/thumbs/full/1024_garden-space.jpg" 
                                alt="Elegant garden space" 
                                className="w-full h-64 md:h-96 object-cover grayscale"
                            />
                        </div>
                         <div className="bg-[#FAF7F1] p-8 md:p-12 text-center lg:text-left">
                            <p className="text-gray-600 text-base leading-relaxed">
                                La struttura offre ai suoi ospiti <strong>nove camere e suite</strong> dotate di ogni comfort, alcune delle quali con affaccio sulla storica piazzetta di Ischia.
                                <br/><br/>
                                Ogni camera del nostro relais è pensata per offrire un <strong>soggiorno all’insegna del benessere totale</strong>, in ambienti curati nei minimi dettagli, dove il design raffinato si unisce alla funzionalità dei servizi.
                            </p>
                             <a href="#" className="inline-block bg-secondary text-white px-8 py-3 rounded-md font-body text-sm font-semibold hover:bg-text-secondary transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                Scopri
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeatureSection;