import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, X, ChevronDown, Wallet } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Comptes et cartes', path: '/comptes' },
    { label: 'Épargne et placements', path: '/epargne' },
    { label: 'Crédits', path: '/credits' },
    { label: 'Assurances', path: '/assurances' },
    { label: 'Conseils et actus', path: '/mag' },
    { label: 'Solutions citoyennes', path: '/solutions' }
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 flex w-full">

      {/* Logo */}
      <div className="border-r border-gray-200 px-8 py-5 flex items-center justify-center min-w-[190px]">
        <Link to="/">
          <img
            src="/Screenshot from 2026-03-11 23-53-07.png"
            alt="logo"
            className="h-16 w-auto object-contain"
          />
        </Link>
      </div>

      <div className="flex-1 flex flex-col">

        {/* Barre supérieure */}
        <div className="flex justify-between items-center px-8 py-3 border-b border-gray-100">

          <div className="flex flex-col leading-tight">
            <span className="text-[11px] text-gray-400 uppercase tracking-widest">
              Changer de site
            </span>

            <button className="text-[#002a5a] font-bold text-base flex items-center gap-1 group">
              Particuliers
              <ChevronDown className="w-5 h-5 text-blue-600 group-hover:rotate-180 transition-transform" />
            </button>
          </div>

          {/* Boutons desktop */}
          <div className="flex items-center gap-5">

            <Button className="hidden md:flex bg-[#0071b3] hover:bg-[#005a8f] text-white px-8 py-4 rounded-full text-base font-bold transition-all gap-3 h-auto uppercase tracking-wide">
              <Wallet className="w-6 h-6" />
              Ouvrir un compte
            </Button>

            <Link
              to="/connexion"
              className="hidden md:flex items-center gap-3 px-8 py-4 border border-gray-300 rounded-full text-[#002a5a] hover:bg-gray-50 transition-all text-base font-bold"
            >
              <User className="w-6 h-6 text-blue-600" />
              Se connecter
            </Link>

          </div>

        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center px-8 py-4">

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

          {/* Recherche desktop */}
          <button className="hidden lg:flex p-3 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-6 h-6 text-[#002a5a]" />
          </button>

        </div>

        {/* Boutons mobile */}
        <div className="flex justify-end gap-4 px-8 pb-4 lg:hidden">

          <button className="p-4 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-8 h-8 text-[#002a5a]" />
          </button>

          <button
            className="p-4 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

        </div>

      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-2xl lg:hidden">
          <nav className="p-6 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-4 px-5 text-[#002a5a] text-base font-bold hover:bg-blue-50 rounded-lg"
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