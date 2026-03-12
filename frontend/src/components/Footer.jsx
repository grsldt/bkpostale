import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Headphones,
  Search,
  HelpCircle,
  MessageSquare,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const productSections = [
    {
      title: "Comptes et cartes",
      links: ["Formule de compte", "Compte jeune 18-29 ans", "Compte mineur 12-17 ans", "Carte premium", "Transfert d'argent"]
    },
    {
      title: "Épargne et placements",
      links: ["Livret A", "Livret jeune", "LDDS", "Assurance vie", "Placements financiers", "ISR"]
    },
    {
      title: "Crédits consommation",
      links: ["Prêt personnel", "Prêt auto", "Prêt véhicule vert", "Prêt travaux", "Rachat de crédit", "Prêt étudiant"]
    },
    {
      title: "Assurances",
      links: ["Assurance auto", "Assurance habitation", "Assurance santé", "Assurance 2 roues", "Protection juridique", "Assurance scolaire"]
    }
  ];

  return (
    <footer className="w-full">
      {/* 1. SECTION PRODUITS (BLANC) */}
      <div className="bg-white border-t border-gray-200 py-12 px-6 md:px-12">
        <div className="w-full lg:w-[80%] mx-auto">
          <h2 className="text-xl text-[#003e62] text-center mb-12 font-medium">
            Les produits préférés de nos clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {productSections.map((section, idx) => (
              <div key={idx} className="space-y-4 text-center md:text-left">
                <h3 className="text-[#003e62] font-bold text-base">{section.title}</h3>
                <ul className="space-y-2 inline-block md:block">
                  {section.links.map((link, i) => (
                    <li key={i} className="flex items-center gap-2 group cursor-pointer justify-center md:justify-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#003e62] shrink-0" />
                      <span className="text-[#003e62] text-[13px] group-hover:underline">{link}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. SECTION BLEUE (RÉASSURANCE & SOCIAL) */}
      <div className="bg-[#003e62] text-white py-12 px-6 md:px-12">
        <div className="w-full lg:w-[80%] mx-auto">
          
          {/* Logo + Réseaux Sociaux */}
          <div className="flex flex-col items-left lg:flex-row lg:justify-between mb-8 gap-8 text-center">
            <div className="flex items-center gap-3">
              <img src="/lg-68721719ebce0-La-Banque-Postale.webp" alt="Logo" className="h-12 md:h-16 brightness-0 invert" />
              <div className="h-10 w-[1px] bg-white/40 hidden lg:block mx-2"></div>
              <span className="text-2xl font-light tracking-wide">Citoyenne</span>
            </div>
            {/* Social Icons : taille ajustée pour mobile */}
<div className="flex justify-center lg:justify-end items-center gap-6 md:gap-10 w-full">
  <Facebook className="w-10 h-10 md:w-12 md:h-12 hover:opacity-70 cursor-pointer" />
  <Instagram className="w-10 h-10 md:w-12 md:h-12 hover:opacity-70 cursor-pointer" />
  <Linkedin className="w-10 h-10 md:w-12 md:h-12 hover:opacity-70 cursor-pointer" />
  <Twitter className="w-10 h-10 md:w-12 md:h-12 hover:opacity-70 cursor-pointer" />
  <Youtube className="w-10 h-10 md:w-12 md:h-12 hover:opacity-70 cursor-pointer" />
</div>
          </div>

          {/* Description + Newsletter */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 mb-12 border-b border-white/20 pb-12">
            <p className="text-[13px] leading-relaxed opacity-90 text-center lg:text-left max-w-full lg:max-w-[70%]">
              Née en 2006, notre banque a grandi avec vous. Citoyenne, ouverte et accessible à tous,
              nous revendiquons l’ambition d’accompagner nos 20 millions de clients avec des offres et
              services performants, la modernité radicale de notre engagement citoyen et notre héritage postal.
              Aujourd’hui notre établissement partage les rêves et les exigences de sa génération.
            </p>
            <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-transparent border border-white px-8 py-3 rounded-md text-sm font-bold hover:bg-white hover:text-[#003e62] transition-all whitespace-nowrap">
              Abonnez-vous à la newsletter
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Liens d'assistance : Grid Responsive (Photo 1 et 2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center text-[11px] uppercase tracking-widest font-bold">
            <a href="#" className="flex items-center justify-center md:justify-start lg:justify-center gap-3 py-6 px-4 hover:bg-white/5 border-b border-white/10 md:border-b-0 md:border-r md:border-white/20">
              <Headphones className="w-5 h-5" />
              Espace sourds et malentendants
            </a>
            <a href="#" className="flex items-center justify-center md:justify-start lg:justify-center gap-3 py-6 px-4 hover:bg-white/5 border-b border-white/10 md:border-b-0 lg:border-r lg:border-white/20">
              <Search className="w-5 h-5" />
              Recherche bureau de poste
            </a>
            <a href="#" className="flex items-center justify-center md:justify-start lg:justify-center gap-3 py-6 px-4 hover:bg-white/5 border-b border-white/10 md:border-b-0 md:border-r md:border-white/20">
              <HelpCircle className="w-5 h-5" />
              Foire aux questions
            </a>
            <a href="#" className="flex items-center justify-center md:justify-start lg:justify-center gap-3 py-6 px-4 hover:bg-white/5">
              <MessageSquare className="w-5 h-5" />
              Nous contacter
            </a>
          </div>

        </div>
      </div>

      {/* 3. SECTION LÉGAL (GRIS) */}
      <div className="bg-[#f2f2f2] py-8 px-6">
        <div className="w-full lg:w-[80%] mx-auto text-center">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[11px] text-[#4a4a4a] font-medium mb-6">
            <li className="hover:underline cursor-pointer">Mentions légales</li>
            <li className="hover:underline cursor-pointer">Tarifs bancaires</li>
            <li className="hover:underline cursor-pointer">Convention de compte</li>
            <li className="hover:underline cursor-pointer">Protection des Données</li>
            <li className="hover:underline cursor-pointer">Cookies</li>
          </ul>
          <p className="text-[10px] text-gray-400 opacity-70">
            © 2026 La Banque Postale - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;