import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { label: 'Comptes et cartes', path: '/comptes', hasDropdown: true },
    { label: 'Épargne et placements', path: '/epargne', hasDropdown: true },
    { label: 'Crédits', path: '/credits', hasDropdown: true },
    { label: 'Assurances', path: '/assurances', hasDropdown: true },
    { label: 'Conseils et actus', path: '/mag', hasDropdown: false },
    { label: 'Solutions citoyennes', path: '/solutions', hasDropdown: true }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-50 border-b border-gray-200 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors">
              Changer de site
              <ChevronDown className="w-4 h-4" />
            </button>
            <span className="text-gray-600">Particuliers</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
            <Link to="/agences" className="text-gray-600 hover:text-gray-900 transition-colors">
              Trouver une agence
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/La_Banque_postale_logo_2010.svg/320px-La_Banque_postale_logo_2010.svg.png" 
              alt="La Banque Postale" 
              className="h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {menuItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.path)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-blue-900 font-medium text-sm transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              className="hidden md:flex bg-[#7FA5CA] hover:bg-[#6B92B8] text-white px-6 py-2 text-sm rounded-md transition-colors"
            >
              Ouvrir un compte
            </Button>
            <Link
              to="/connexion"
              className="hidden md:flex items-center gap-2 text-gray-700 hover:text-blue-900 transition-colors text-sm"
            >
              <User className="w-5 h-5" />
              Se connecter
            </Link>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button className="w-full bg-[#7FA5CA] hover:bg-[#6B92B8] text-white">
                Ouvrir un compte
              </Button>
              <Link
                to="/connexion"
                className="block text-center py-2 text-gray-700 hover:text-blue-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Se connecter
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;