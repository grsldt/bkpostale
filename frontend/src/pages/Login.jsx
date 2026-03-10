import React, { useState } from 'react';
import { X, Search, Menu } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';
import { toast } from '../hooks/use-toast';

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const handleContinue = (e) => {
    e.preventDefault();
    if (identifier.length !== 10) {
      toast({
        title: "Erreur",
        description: "L'identifiant doit contenir 10 chiffres",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Connexion",
      description: "Redirection vers la page de mot de passe..."
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/La_Banque_postale_logo_2010.svg/320px-La_Banque_postale_logo_2010.svg.png" 
            alt="La Banque Postale" 
            className="h-8"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-start justify-center px-6 py-16 bg-white">
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-light text-gray-600 mb-12">
              Connexion à votre compte particulier
            </h1>

            <form onSubmit={handleContinue} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Identifiant (10 chiffres)
                </label>
                <Input
                  type="text"
                  maxLength={10}
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value.replace(/\D/g, ''))}
                  className="w-full h-14 px-4 border border-gray-300 rounded-md text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder=""
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember" 
                  checked={rememberMe}
                  onCheckedChange={setRememberMe}
                  className="border-gray-400"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  Mémoriser mon identifiant
                </label>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#7FA5CA] hover:bg-[#6B92B8] text-white text-base rounded-md transition-colors"
              >
                Continuer
              </Button>

              <div className="text-center pt-4">
                <a href="#" className="text-sm text-gray-500 hover:text-gray-700 underline">
                  Identifiant / Mot de passe oublié
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Info Section */}
        <div className="hidden lg:flex lg:w-1/2 bg-[#D5E5F4] flex-col items-center justify-center px-12 py-16">
          <div className="w-full max-w-xl">
            <h2 className="text-3xl font-light text-white mb-16 text-center">
              La Banque Postale, citoyenne
            </h2>

            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-8 space-y-6">
              <h3 className="text-lg font-medium text-white mb-3">
                Espace Assurance La Banque Postale
              </h3>
              <p className="text-white text-sm leading-relaxed mb-6">
                Vous n'avez pas d'accès Banque En Ligne et souhaitez retrouver vos contrats La Banque Postale Assurance ?
              </p>
              <div className="space-y-3">
                <a href="#" className="block text-white text-sm underline hover:no-underline transition-all">
                  Signer mon contrat en ligne
                </a>
                <Button
                  variant="outline"
                  className="w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-2.5 rounded-md transition-all text-sm"
                >
                  Me connecter à mon espace assurance
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
          <div className="container mx-auto px-6 py-6">
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
                <ul className="text-sm text-gray-700 space-y-1 mb-4 ml-4">
                  <li><strong>• Mesure d'audience :</strong> établir des statistiques complémentaires sur l'utilisation de nos sites et applications mobiles.</li>
                  <li><strong>• Analyse et personnalisation :</strong> analyser les parcours clients et les contenus consultés afin de vous proposer des offres produits et services, des informations et communications en fonction de votre navigation et de votre profil.</li>
                  <li><strong>• Publicités :</strong> permettre à La Banque Postale et ses partenaires de vous adresser des publicités correspondant à vos centres d'intérêt sur notre site ou en dehors de notre site.</li>
                  <li><strong>• Vidéos :</strong> vous permettre de visionner directement sur notre site nos contenus multimédias hébergés sur un site externe.</li>
                </ul>
                <p className="text-sm text-gray-700 mb-4">
                  En cliquant sur « Uniquement autoriser les cookies essentiels » vous indiquez votre refus et seuls les cookies strictement nécessaires au bon fonctionnement du site seront déposés.
                  Vous pouvez modifier vos choix à tout moment ou obtenir plus d'informations via <a href="#" className="text-blue-700 underline">notre politique cookies</a>.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <Button
                onClick={() => setShowCookieBanner(false)}
                className="bg-[#003D7A] hover:bg-[#002A5A] text-white px-8 py-3 rounded-md text-sm font-medium transition-colors"
              >
                TOUT ACCEPTER
              </Button>
              <Button
                onClick={() => setShowCookieBanner(false)}
                variant="outline"
                className="border-2 border-[#003D7A] text-[#003D7A] hover:bg-[#003D7A] hover:text-white px-8 py-3 rounded-md text-sm font-medium transition-colors"
              >
                UNIQUEMENT AUTORISER LES COOKIES ESSENTIELS
              </Button>
              <Button
                onClick={() => setShowCookieBanner(false)}
                variant="outline"
                className="border-2 border-[#003D7A] text-[#003D7A] hover:bg-[#003D7A] hover:text-white px-8 py-3 rounded-md text-sm font-medium transition-colors"
              >
                PERSONNALISER
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;