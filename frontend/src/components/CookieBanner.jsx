import React, { useState } from 'react';
import { Button } from '../components/ui/button';

const CookieBanner = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 animate-in slide-in-from-bottom">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-start gap-6">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/La_Banque_postale_logo_2010.svg/320px-La_Banque_postale_logo_2010.svg.png" 
            alt="La Banque Postale" 
            className="h-8 flex-shrink-0"
          />
          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              La Banque Postale <span className="font-normal">respecte votre vie privée</span>
            </h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Lors de votre navigation sur notre site, nous et nos filiales utilisons certains cookies dont certains requièrent votre accord pour être déposés. Les finalités de ces cookies sont les suivantes :
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li><strong>• Mesure d'audience :</strong> établir des statistiques complémentaires sur l'utilisation de nos sites et applications mobiles.</li>
              <li><strong>• Analyse et personnalisation :</strong> analyser les parcours clients et les contenus consultés.</li>
              <li><strong>• Publicités :</strong> permettre à La Banque Postale et ses partenaires de vous adresser des publicités.</li>
              <li><strong>• Vidéos :</strong> vous permettre de visionner directement sur notre site nos contenus multimédias.</li>
            </ul>
            <p className="text-sm text-gray-700 mb-4">
              En cliquant sur « Uniquement autoriser les cookies essentiels » vous indiquez votre refus et seuls les cookies strictement nécessaires au bon fonctionnement du site seront déposés.
              Vous pouvez modifier vos choix à tout moment ou obtenir plus d'informations via <a href="#" className="text-blue-700 underline">notre politique cookies</a>.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          <Button
            onClick={() => setShow(false)}
            className="bg-[#003D7A] hover:bg-[#002A5A] text-white px-8 py-3 rounded-md text-sm font-medium transition-colors"
          >
            TOUT ACCEPTER
          </Button>
          <Button
            onClick={() => setShow(false)}
            variant="outline"
            className="border-2 border-[#003D7A] text-[#003D7A] hover:bg-[#003D7A] hover:text-white px-8 py-3 rounded-md text-sm font-medium transition-colors"
          >
            UNIQUEMENT AUTORISER LES COOKIES ESSENTIELS
          </Button>
          <Button
            onClick={() => setShow(false)}
            variant="outline"
            className="border-2 border-[#003D7A] text-[#003D7A] hover:bg-[#003D7A] hover:text-white px-8 py-3 rounded-md text-sm font-medium transition-colors"
          >
            PERSONNALISER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;