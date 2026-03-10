import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, TrendingUp, Shield, PiggyBank, ChevronRight, AlertTriangle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import CookieBanner from '../components/CookieBanner';
import { quickActions, solutions, articles, popularProducts } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const iconMap = {
  CreditCard,
  TrendingUp,
  Shield,
  PiggyBank
};

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Slider */}
      <HeroSlider />

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = iconMap[action.icon];
              return (
                <Link
                  key={index}
                  to={action.link}
                  className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-all group"
                >
                  <div className="w-16 h-16 bg-[#D5E5F4] rounded-full flex items-center justify-center mb-3 group-hover:bg-[#7FA5CA] transition-colors">
                    <Icon className="w-8 h-8 text-[#003D7A] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-900 transition-colors">
                    {action.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light text-center text-gray-800 mb-16">
            Bienvenue à La Banque Postale, citoyenne
          </h2>

          {/* Featured Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Django Card */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 relative">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" 
                  alt="Django"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-light mb-3 text-gray-800">Étalez vos dépenses en 3 fois !</h3>
                <p className="text-gray-600 mb-4">
                  Découvrez l'offre "Financement en 3x" disponible dans l'application Django.
                </p>
                <Button variant="outline" className="group">
                  Découvrir Django
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            {/* Contest Card */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-amber-50 to-amber-100 relative">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80" 
                  alt="Dounia Secret Déco"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-light mb-3 text-gray-800">
                  Tentez de gagner<sup>(2)</sup> une place pour rencontrer notre experte déco !
                </h3>
                <p className="text-gray-600 mb-4">
                  Participez au jeu-concours du 2 au 15 mars 2026 inclus.
                </p>
                <Button variant="outline" className="group">
                  Je tente ma chance !
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Security Alert */}
          <Card className="bg-blue-50 border-blue-200">
            <div className="p-8 flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-blue-900" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-medium mb-3 text-gray-800">
                  Protégez-vous des fuites de données personnelles
                </h3>
                <p className="text-lg font-semibold text-gray-700 mb-2">Vigilance fraude</p>
                <ul className="space-y-2 mb-4">
                  <li className="text-gray-700">• <strong>Consultez régulièrement votre compte bancaire.</strong></li>
                  <li className="text-gray-700">• En cas de mouvement inhabituel, <strong>contactez votre conseiller</strong>.</li>
                </ul>
                <p className="text-sm text-gray-600 mb-4">
                  La Banque Postale ne vous demandera jamais vos informations bancaires (codes, identifiants…) ni de valider une opération bancaire dont vous n'êtes pas à l'origine.
                </p>
                <Link to="/alertes" className="text-blue-900 font-medium hover:underline">
                  Protégez-vous contre la fraude →
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Bank Change Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" 
                alt="Changer de banque"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-800">
                Nous vous accompagnons dans vos démarches pour changer de banque
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2"></div>
                  <p className="text-gray-700">Avec un service <strong>simple, rapide et gratuit</strong> de mobilité bancaire.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2"></div>
                  <p className="text-gray-700">Vous n'avez <strong>pas besoin d'avoir de contact avec votre ancienne banque</strong>.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Votre changement de domiciliation bancaire est automatisé</strong> afin que vos virements reçus et vos prélèvements soient transférés.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="bg-[#7FA5CA] hover:bg-[#6B92B8] text-white">
                  J'ouvre un compte facilement
                </Button>
                <Button variant="outline">
                  Découvrir notre guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-800">
            La Banque Postale vous soutient dans tous vos projets
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link
                key={solution.id}
                to={solution.link}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-3 text-gray-800 group-hover:text-blue-900 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Patrimonial Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Solutions patrimoniales
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                Vous accompagner au quotidien, soutenir vos projets, être au service de vos intérêts, telles sont les missions des conseillers spécialisés de La Banque Postale.
              </p>
              <Button className="bg-white text-blue-900 hover:bg-gray-100">
                Découvrez nos solutions
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" 
                alt="Solutions patrimoniales"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Le Mag Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800">Le Mag</h2>
            <Link to="/mag" className="text-blue-900 font-medium hover:underline flex items-center gap-2">
              Voir toutes les actualités
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={article.link}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-blue-900 font-medium mb-2">{article.theme}</div>
                    <h3 className="text-lg font-medium mb-3 text-gray-800 group-hover:text-blue-900 transition-colors">
                      {article.title}
                    </h3>
                    <div className="text-sm text-gray-500">Date de publication : {article.date}</div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-800">
            Les produits préférés des clients de La Banque Postale
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Comptes et cartes */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Comptes et cartes</h3>
              <ul className="space-y-2">
                {popularProducts.comptesCartes.map((product, index) => (
                  <li key={index}>
                    <Link to={product.link} className="text-blue-900 hover:underline text-sm">
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Épargne */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Épargne et placements financiers</h3>
              <ul className="space-y-2">
                {popularProducts.epargne.map((product, index) => (
                  <li key={index}>
                    <Link to={product.link} className="text-blue-900 hover:underline text-sm">
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Crédits */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Crédits consommation</h3>
              <ul className="space-y-2">
                {popularProducts.credits.map((product, index) => (
                  <li key={index}>
                    <Link to={product.link} className="text-blue-900 hover:underline text-sm">
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Immobilier */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Prêts immobiliers</h3>
              <ul className="space-y-2">
                {popularProducts.immobilier.map((product, index) => (
                  <li key={index}>
                    <Link to={product.link} className="text-blue-900 hover:underline text-sm">
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Assurances */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Assurances</h3>
              <ul className="space-y-2">
                {popularProducts.assurances.map((product, index) => (
                  <li key={index}>
                    <Link to={product.link} className="text-blue-900 hover:underline text-sm">
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Home;