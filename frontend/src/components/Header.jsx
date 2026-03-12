import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, X, ChevronDown, Wallet } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Détection du scroll pour le changement de design sur mobile
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Comptes et cartes', path: '/comptes' },
    { label: 'Épargne et placements', path: '/epargne' },
    { label: 'Crédits', path: '/credits' },
    { label: 'Assurances', path: '/assurances' },
    { label: 'Conseils et actus', path: '/mag' },
    { label: 'Solutions citoyennes', path: '/solutions' }
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 w-full">
      <div className="flex w-full">
        
        {/* SECTION LOGO (Identique à tes captures) */}
        <div className="border-r border-gray-200 px-6 py-4 flex items-center justify-center min-w-[130px] lg:min-w-[190px]">
          <Link to="/">
            <img
              src="/Screenshot from 2026-03-11 23-53-07.png"
              alt="La Banque Postale"
              className="h-10 lg:h-16 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="flex-1 flex flex-col">
          
          {/* 1. LIGNE DU HAUT (Changer de site) */}
          {/* Sur mobile, elle disparaît au scroll pour coller à ton image */}
          <div className={`transition-all duration-300 flex justify-between items-center px-6 py-2 border-b border-gray-100 ${
            isScrolled ? 'hidden lg:flex' : 'flex'
          }`}>
            <div className="flex flex-col lg:flex-row lg:items-center gap-0 lg:gap-2 leading-tight">
              <span className="text-[10px] lg:text-[11px] text-gray-400 uppercase tracking-widest">
                Changer de site
              </span>
              <button className="text-[#002a5a] font-bold text-sm lg:text-base flex items-center gap-1">
                Particuliers
                <ChevronDown className="w-4 h-4 text-blue-600" />
              </button>
            </div>

            {/* Boutons Desktop (Cachés sur mobile) */}
            <div className="hidden lg:flex items-center gap-5">
              <Button className="bg-[#0071b3] hover:bg-[#005a8f] text-white px-8 py-4 rounded-full text-base font-bold transition-all gap-3 h-auto uppercase tracking-wide">
                <Wallet className="w-6 h-6" />
                Ouvrir un compte
              </Button>
              <Link
                to="/connexion"
                className="flex items-center gap-3 px-8 py-4 border border-gray-300 rounded-full text-[#002a5a] hover:bg-gray-50 transition-all text-base font-bold"
              >
                <User className="w-6 h-6 text-blue-600" />
                Se connecter
              </Link>
            </div>
          </div>

          {/* 2. LIGNE DU BAS (Navigation ou Design Mobile Scrollé) */}
          <div className={`flex items-center px-6 transition-all duration-300 ${
            isScrolled ? 'h-[70px] lg:h-auto py-0' : 'py-4'
          }`}>
            
            {/* RENDU MOBILE UNIQUE (Caché sur PC) */}
            <div className="flex lg:hidden w-full justify-between items-center">
              {/* L'icône connexion circulaire de l'image 1 */}
              <Link
                to="/connexion"
                className="flex items-center justify-center w-12 h-12 border border-gray-200 rounded-full active:bg-gray-100"
              >
                <User className="w-6 h-6 text-[#002a5a]" />
              </Link>

              {/* Recherche et Menu à droite */}
              <div className="flex items-center gap-5">
                <button className="p-1">
                  <Search className="w-7 h-7 text-[#002a5a]" />
                </button>
                <button className="p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? (
                    <X className="w-8 h-8 text-[#002a5a]" />
                  ) : (
                    <Menu className="w-8 h-8 text-[#002a5a]" />
                  )}
                </button>
              </div>
            </div>

            {/* NAVIGATION DESKTOP (Inchangée) */}
            <nav className="hidden lg:flex items-center gap-10">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[#002a5a] hover:text-blue-700 text-[15px] font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Recherche Desktop */}
            <button className="hidden lg:ml-auto lg:flex p-3 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-6 h-6 text-[#002a5a]" />
            </button>

          </div>
        </div>
      </div>

      {/* MENU MOBILE DÉROULANT */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-2xl lg:hidden animate-in slide-in-from-top duration-200">
          <nav className="p-6 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-4 px-5 text-[#002a5a] text-lg font-bold hover:bg-blue-50 rounded-lg active:bg-blue-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;