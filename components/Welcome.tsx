import React from 'react';
import AnimatedElement from './AnimatedElement';

const Welcome: React.FC = () => {
    return (
        <section className="py-20 md:py-28 overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <AnimatedElement>
                    <h1 className="text-4xl md:text-5xl text-[#1a4531] mb-4">
                        Relais Corte degli Aragonesi
                    </h1>
                </AnimatedElement>
                <AnimatedElement delay={150}>
                    <h2 className="text-2xl md:text-3xl text-[#3d6f58] mb-8">
                        Un incantevole rifugio nel cuore di Ischia
                    </h2>
                </AnimatedElement>
                <AnimatedElement delay={300}>
                    <div className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed border-t border-gray-300 pt-8">
                        <p>
                            Nel cuore vibrante di Ischia, a pochi passi dalle sue acque cristalline e dal fascino senza tempo del centro storico, sorge il <strong>Relais Corte degli Aragonesi</strong>, un’oasi di eleganza e raffinatezza.
                        </p>
                        <p className="mt-4">
                            Questa esclusiva struttura accoglie i suoi ospiti in un’<strong>atmosfera intima e sofisticata</strong>, offrendo nove lussuose suites, ciascuna progettata per garantire il massimo del comfort e della privacy.
                        </p>
                    </div>
                </AnimatedElement>
            </div>
        </section>
    );
};

export default Welcome;