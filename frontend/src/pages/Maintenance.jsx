import React from 'react';
import { Wrench, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/button';

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-lg overflow-hidden border-t-4 border-[#002a5a]">
        
        {/* Header avec Logo */}
        <div className="p-8 border-b border-gray-100 flex justify-center">
          <img
            src="/Screenshot from 2026-03-11 23-53-07.png"
            alt="La Banque Postale"
            className="h-16 object-contain"
          />
        </div>

        {/* Contenu Principal */}
        <div className="p-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-50 p-4 rounded-full">
              <Wrench className="w-12 h-12 text-[#002a5a]" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-[#002a5a] mb-4">
            Espace Client momentanément indisponible
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Afin de vous offrir une qualité de service optimale et de renforcer la sécurité de vos opérations, 
            nos services en ligne font actuellement l'objet d'une <strong>maintenance technique programmée</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-md">
              <Clock className="w-5 h-5 text-[#002a5a] shrink-0 mt-1" />
              <div>
                <span className="block font-bold text-sm text-[#002a5a]">Durée estimée</span>
                <span className="text-xs text-gray-500">Rétablissement prévu sous 2 heures.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-md">
              <ShieldCheck className="w-5 h-5 text-[#002a5a] shrink-0 mt-1" />
              <div>
                <span className="block font-bold text-sm text-[#002a5a]">Vos données</span>
                <span className="text-xs text-gray-500">Vos accès restent sécurisés.</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-6 italic">
            Veuillez nous excuser pour la gêne occasionnée.
          </p>

          <Button 
            onClick={() => window.location.href = "https://www.labanquepostale.fr"}
            className="bg-[#002a5a] hover:bg-[#001d3d] text-white px-10 py-6 rounded-md font-bold uppercase tracking-wide"
          >
            Retour au site institutionnel
          </Button>
        </div>

        {/* Footer de maintenance */}
        <div className="bg-[#002a5a] p-4 text-center">
          <span className="text-white text-[10px] uppercase tracking-widest opacity-80">
            La Banque Postale - Direction des Systèmes d'Information
          </span>
        </div>
      </div>
      
      <p className="mt-8 text-gray-400 text-xs">Réf. technique : ERR_MAIN_503_LBP</p>
    </div>
  );
};

export default Maintenance;