import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
    }`;
    const textClasses = isScrolled || isMenuOpen ? 'text-gray-800' : 'text-white';
    const hoverTextClasses = isScrolled || isMenuOpen ? 'hover:text-[#3D6F58]' : 'hover:text-gray-200';
    const buttonClasses = isScrolled || isMenuOpen 
        ? 'bg-[#335b48] text-white hover:bg-[#1a4531]' 
        : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30';
    
    const navLinks = ["Relais", "Servizi", "Camere & Suite", "Dove Siamo", "Offerte"];

    return (
        <header className={headerClasses}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#" className={`text-2xl font-heading font-semibold tracking-wide ${textClasses}`}>Relais Corte degli Aragonesi</a>
                </div>
                <nav className="hidden lg:flex items-center space-x-6">
                    {navLinks.map(link => (
                        <a key={link} href="#" className={`text-sm font-medium transition-colors ${textClasses} ${hoverTextClasses}`}>{link}</a>
                    ))}
                </nav>
                <div className="flex items-center space-x-4">
                    <button className={`hidden lg:block text-sm font-medium px-5 py-2 rounded-md transition-colors duration-300 ${buttonClasses}`}>
                        Prenota
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-md focus:outline-none">
                        <div className="w-6 h-6 flex flex-col justify-around">
                            <span className={`block w-6 h-0.5 ${isScrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white'} transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-[5px]' : ''}`}></span>
                            <span className={`block w-6 h-0.5 ${isScrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 ${isScrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white'} transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-[5px]' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>
             {/* Mobile Menu */}
             <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="bg-white px-6 pb-6 pt-2">
                    <nav className="flex flex-col space-y-4">
                         {navLinks.map(link => (
                            <a key={link} href="#" className="text-gray-800 hover:text-[#3D6F58] py-2 text-center">{link}</a>
                         ))}
                         <button className="bg-[#335b48] text-white hover:bg-[#1a4531] text-sm font-medium px-5 py-3 rounded-md transition-colors duration-300">
                            Prenota
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
