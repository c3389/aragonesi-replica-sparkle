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
    const hoverTextClasses = isScrolled || isMenuOpen ? 'hover:text-secondary' : 'hover:text-gray-200';
    const buttonClasses = isScrolled || isMenuOpen 
        ? 'bg-secondary text-white hover:bg-text-secondary' 
        : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30';
    
    const navLinks = [
        { name: "Il Relais", href: "#welcome" },
        { name: "Servizi", href: "#servizi" },
        { name: "Camere & Suite", href: "#camere" },
        { name: "Giardino", href: "#giardino" },
        { name: "Dove Siamo", href: "#location" }
    ];

    const handleLinkClick = (href: string) => {
        setIsMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const headerHeight = 80; // altezza header per offset
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className={headerClasses}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#" className={`text-2xl font-heading font-semibold tracking-wide ${textClasses}`}>Relais Corte degli Aragonesi</a>
                </div>
                <nav className="hidden lg:flex items-center space-x-6">
                    {navLinks.map(link => (
                        <button 
                            key={link.name} 
                            onClick={() => handleLinkClick(link.href)} 
                            className={`text-sm font-medium transition-colors cursor-pointer ${textClasses} ${hoverTextClasses}`}
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>
                <div className="flex items-center space-x-4">
                    <button className={`hidden lg:block text-sm font-medium px-5 py-2 rounded-md transition-colors duration-300 ${buttonClasses}`}>
                        Prenota
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-md focus:outline-none">
                        <div className="w-6 h-6 relative flex flex-col justify-center space-y-1">
                            <span className={`block w-6 h-0.5 ${isScrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 absolute' : ''}`}></span>
                            <span className={`block w-6 h-0.5 ${isScrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 ${isScrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 absolute' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>
             {/* Mobile Menu */}
             <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="bg-white px-6 pb-6 pt-2">
                    <nav className="flex flex-col space-y-4">
                         {navLinks.map(link => (
                            <button 
                                key={link.name} 
                                onClick={() => handleLinkClick(link.href)} 
                                className="text-gray-800 hover:text-secondary py-2 text-center cursor-pointer"
                            >
                                {link.name}
                            </button>
                         ))}
                         <button className="bg-secondary text-white hover:bg-text-secondary text-sm font-medium px-5 py-3 rounded-md transition-colors duration-300">
                            Prenota
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
