import React from 'react';
import { LocationPinIcon, PhoneIcon, EnvelopeIcon, InstagramIcon, FacebookIcon } from './Icons';

const Footer: React.FC = () => {
    const footerLinks = ['Contatti', 'Dati Societari', 'Privacy', 'Cookie'];

    return (
        <footer className="bg-text-secondary text-background">
            <div className="container mx-auto px-6 py-16 text-center">
                <div className="flex justify-center mb-8">
                    <a href="#" className="text-3xl font-heading font-semibold tracking-wide">Relais Corte degli Aragonesi</a>
                </div>

                <address className="not-italic max-w-sm mx-auto mb-8 font-body text-base">
                    <div className="flex items-center justify-center mb-3">
                        <LocationPinIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Corso Vittoria Colonna, 118 - 80077, Ischia (NA)</a>
                    </div>
                    <div className="flex items-center justify-center mb-3">
                        <PhoneIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                        <a href="tel:+390813597749" className="hover:text-gray-300">+39 081 359 7749</a>
                    </div>
                    <div className="flex items-center justify-center">
                        <EnvelopeIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                        <a href="mailto:info@relaiscortedegliaragonesi.it" className="hover:text-gray-300">info@relaiscortedegliaragonesi.it</a>
                    </div>
                </address>

                <div className="flex justify-center space-x-6 mb-10">
                    <a href="https://www.instagram.com/relaiscortedegliaragonesi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-300 transition-colors">
                        <InstagramIcon className="w-6 h-6" />
                    </a>
                    <a href="https://www.facebook.com/relaiscortedegliaragonesi/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-300 transition-colors">
                        <FacebookIcon className="w-6 h-6" />
                    </a>
                </div>

                <div className="border-t border-b border-white/20 py-6 mb-10 max-w-3xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {footerLinks.map(link => (
                            <a key={link} href="#" className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">{link}</a>
                        ))}
                    </div>
                </div>

                <div className="text-xs text-white/60 font-body">
                    <p>P.IVA: 07298141214</p>
                    <p className="mt-2">website by blastness</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;