import React, { useState } from 'react';
import { Button } from '../components/ui/button';

const CookieBanner = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-[100] animate-in slide-in-from-bottom duration-500 overflow-y-auto max-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 py-6 md:px-8">
        
        {/* Layout : Colonne sur mobile, Ligne sur Desktop */}
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
          <img 
            src="/Screenshot from 2026-03-11 23-53-07.png" 
            alt="La Banque Postale" 
            className="h-7 md:h-8 flex-shrink-0"
          />
          
          <div className="flex-1">
            <h3 className="text-[15px] md:text-base font-semibold text-gray-900 mb-2">
              La Banque Postale <span className="font-normal">respecte votre vie privée</span>
            </h3>
            
            <div className="text-xs md:text-sm text-gray-700 space-y-3 leading-relaxed">
              <p>
                Lors de votre navigation sur notre site, nous et nos filiales utilisons certains cookies dont certains requièrent votre accord pour être déposés. Les finalités de ces cookies sont les suivantes :
              </p>
              
              {/* Grille pour les listes sur PC, simple liste sur mobile */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 ml-1">
                <li><strong>• Mesure d'audience :</strong> statistiques complémentaires.</li>
                <li><strong>• Analyse et personnalisation :</strong> analyse des parcours.</li>
                <li><strong>• Publicités :</strong> publicités correspondantes.</li>
                <li><strong>• Vidéos :</strong> contenus multimédias.</li>
              </ul>
              
              <p className="hidden md:block text-[13px]">
                En cliquant sur « Uniquement autoriser les cookies essentiels » vous indiquez votre refus. 
                Vous pouvez modifier vos choix via <a href="#" className="text-blue-700 underline font-medium">notre politique cookies</a>.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION BOUTONS : Empilés sur Mobile, Alignés sur Desktop */}
        <div className="flex flex-col md:flex-row flex-wrap gap-3 mt-6">
          <Button
            onClick={() => setShow(false)}
            className="w-full md:w-auto bg-[#003D7A] hover:bg-[#002A5A] text-white px-8 py-6 md:py-3 rounded-md text-xs md:text-sm font-bold md:font-medium transition-colors order-1"
          >
            TOUT ACCEPTER
          </Button>
          
          <Button
            onClick={() => setShow(false)}
            variant="outline"
            className="w-full md:w-auto border-2 border-[#003D7A] text-[#003D7A] hover:bg-[#003D7A] hover:text-white px-8 py-6 md:py-3 rounded-md text-xs md:text-sm font-bold md:font-medium transition-colors order-2"
          >
            UNIQUEMENT AUTORISER LES COOKIES ESSENTIELS
          </Button>
          
          <Button
            onClick={() => setShow(false)}
            variant="outline"
            className="w-full md:w-auto border-2 border-[#003D7A] text-[#003D7A] hover:bg-[#003D7A] hover:text-white px-8 py-6 md:py-3 rounded-md text-xs md:text-sm font-bold md:font-medium transition-colors order-3"
          >
            PERSONNALISER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;