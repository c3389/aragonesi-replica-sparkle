import React from 'react';
import AnimatedElement from './AnimatedElement';

interface WelcomeProps {
    id?: string;
}

const Welcome: React.FC<WelcomeProps> = ({ id }) => {
    return (
        <section id={id} className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6 text-center">
                <AnimatedElement>
                    <h2 className="text-3xl md:text-4xl font-heading text-secondary mb-6">
                        Benvenuti nel nostro Relais
                    </h2>
                </AnimatedElement>
                <AnimatedElement delay={200}>
                    <div className="max-w-4xl mx-auto text-base md:text-lg leading-relaxed text-text-primary">
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg border border-white/20">
                            <p className="mb-6">
                                Nel cuore vibrante di Ischia, a pochi passi dalle sue acque cristalline e dal fascino senza tempo del centro storico, sorge il <strong className="text-secondary">Relais Corte degli Aragonesi</strong>, un'oasi di eleganza e raffinatezza.
                            </p>
                            <p>
                                Questa esclusiva struttura accoglie i suoi ospiti in un'<strong className="text-secondary">atmosfera intima e sofisticata</strong>, offrendo nove lussuose suites, ciascuna progettata per garantire il massimo del comfort e della privacy.
                            </p>
                        </div>
                    </div>
                </AnimatedElement>
            </div>
        </section>
    );
};

export default Welcome;