import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Comptes */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Comptes et cartes</h3>
            <ul className="space-y-2">
              {footerLinks.comptes.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="text-sm text-gray-600 hover:text-blue-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Épargne */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Épargne</h3>
            <ul className="space-y-2">
              {footerLinks.epargne.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="text-sm text-gray-600 hover:text-blue-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Crédits */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Crédits</h3>
            <ul className="space-y-2">
              {footerLinks.credits.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="text-sm text-gray-600 hover:text-blue-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Assurances */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Assurances</h3>
            <ul className="space-y-2">
              {footerLinks.assurances.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="text-sm text-gray-600 hover:text-blue-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aide */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Aide & Contact</h3>
            <ul className="space-y-2">
              {footerLinks.aide.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="text-sm text-gray-600 hover:text-blue-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Apps */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Suivez-nous :</span>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-blue-900 rounded-full flex items-center justify-center transition-colors group">
                  <span className="text-gray-600 group-hover:text-white text-xs">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-blue-900 rounded-full flex items-center justify-center transition-colors group">
                  <span className="text-gray-600 group-hover:text-white text-xs">tw</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-blue-900 rounded-full flex items-center justify-center transition-colors group">
                  <span className="text-gray-600 group-hover:text-white text-xs">in</span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Téléchargez l'app :</span>
              <div className="flex gap-3">
                <a href="#" className="px-4 py-2 bg-black text-white text-xs rounded-lg hover:bg-gray-800 transition-colors">
                  App Store
                </a>
                <a href="#" className="px-4 py-2 bg-black text-white text-xs rounded-lg hover:bg-gray-800 transition-colors">
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link to="/mentions-legales" className="hover:text-blue-900 transition-colors">Mentions légales</Link>
              <Link to="/donnees-personnelles" className="hover:text-blue-900 transition-colors">Données personnelles</Link>
              <Link to="/cookies" className="hover:text-blue-900 transition-colors">Cookies</Link>
              <Link to="/accessibilite" className="hover:text-blue-900 transition-colors">Accessibilité</Link>
              <Link to="/plan-site" className="hover:text-blue-900 transition-colors">Plan du site</Link>
            </div>
            <div className="text-center md:text-right">
              <p>© 2026 La Banque Postale - Tous droits réservés</p>
            </div>
          </div>

          {/* Legal text */}
          <div className="mt-6 text-xs text-gray-500 leading-relaxed">
            <p className="mb-2">
              <strong>Mentions légales :</strong> Prêteur : LA BANQUE POSTALE CONSUMER FINANCE - S.A. à Directoire et Conseil de Surveillance. Capital social 243 250 000 €. 
              1 avenue François Mitterrand 93212 La Plaine Saint Denis Cedex. RCS Bobigny n°487 779 035.
            </p>
            <p className="mb-2">
              Distributeur/Intermédiaire de crédit : LA BANQUE POSTALE - S.A. à Directoire et Conseil de Surveillance. 
              Capital social 6 585 350 218 €. 115 rue de Sèvres, 75275 Paris Cedex 06. RCS Paris n°421100645. ORIAS n°07023424.
            </p>
            <p>
              Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;