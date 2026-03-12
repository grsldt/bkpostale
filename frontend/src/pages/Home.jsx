import React, { useEffect } from 'react';
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
  useEffect(() => {
  document.title = "Accueil - Banque et Assurance - OUverture en ligne -La Banque Postale";
}, []);
  return (
    <div className="min-h-screen bg-white">

      <Header />

      <HeroSlider />

      {/* Quick Actions */}
      <div className="w-[80%] mx-auto -mt-16 relative z-10">
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
        <div className="w-[80%] mx-auto">

          <h2 className="text-4xl md:text-5xl font-light text-center text-gray-800 mb-16">
            Bienvenue à La Banque Postale, citoyenne
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                  alt="Django"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-light mb-3 text-gray-800">
                  Étalez vos dépenses en 3 fois !
                </h3>

                <p className="text-gray-600 mb-4">
                  Découvrez l'offre "Financement en 3x" disponible dans l'application Django.
                </p>

                <Button variant="outline" className="group">
                  Découvrir Django
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-amber-50 to-amber-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                  alt="Concours"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-light mb-3 text-gray-800">
                  Tentez de gagner une place pour rencontrer notre experte déco !
                </h3>

                <p className="text-gray-600 mb-4">
                  Participez au jeu-concours du 2 au 15 mars.
                </p>

                <Button variant="outline" className="group">
                  Je tente ma chance !
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

          </div>

          {/* Security */}
          <Card className="bg-blue-50 border-blue-200">
            <div className="p-8 flex items-start gap-6">

              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-blue-900" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-medium mb-3 text-gray-800">
                  Protégez-vous des fuites de données personnelles
                </h3>

                <p className="text-lg font-semibold text-gray-700 mb-2">
                  Vigilance fraude
                </p>

                <ul className="space-y-2 mb-4">
                  <li className="text-gray-700">• Consultez régulièrement votre compte bancaire.</li>
                  <li className="text-gray-700">• En cas de mouvement inhabituel, contactez votre conseiller.</li>
                </ul>

                <Link to="/alertes" className="text-blue-900 font-medium hover:underline">
                  Protégez-vous contre la fraude →
                </Link>
              </div>

            </div>
          </Card>

        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="w-[80%] mx-auto">

          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-800">
            La Banque Postale vous soutient dans tous vos projets
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link key={solution.id} to={solution.link} className="group">

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

      {/* Le Mag */}
      <section className="py-20 bg-white">
        <div className="w-[80%] mx-auto">

          <div className="flex justify-between items-center mb-12">

            <h2 className="text-3xl md:text-4xl font-light text-gray-800">
              Le Mag
            </h2>

            <Link to="/mag" className="text-blue-900 font-medium hover:underline flex items-center gap-2">
              Voir toutes les actualités
              <ChevronRight className="w-5 h-5" />
            </Link>

          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article) => (

              <Link key={article.id} to={article.link} className="group">

                <Card className="overflow-hidden hover:shadow-xl transition-all">

                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">

                    <div className="text-xs text-blue-900 font-medium mb-2">
                      {article.theme}
                    </div>

                    <h3 className="text-lg font-medium mb-3 text-gray-800 group-hover:text-blue-900 transition-colors">
                      {article.title}
                    </h3>

                    <div className="text-sm text-gray-500">
                      Date de publication : {article.date}
                    </div>

                  </div>

                </Card>

              </Link>

            ))}
          </div>

        </div>
      </section>

      <Footer />
      <CookieBanner />

    </div>
  );
};

export default Home;