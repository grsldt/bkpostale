// Mock data for La Banque Postale clone

export const heroSlides = [
  {
    id: 1,
    title: "Assurance Habitation : Offre exclusive 2 mois offerts",
    subtitle: "Composez votre Assurance Habitation sur mesure et profitez de 2 mois offerts jusqu'au 12 avril 2026 inclus.",
    cta: "Commencer mon devis",
    link: "/assurances/habitation",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80",
    note: "(1)"
  },
  {
    id: 2,
    title: "Étalez vos dépenses en 3 fois !",
    subtitle: "Découvrez l'offre \"Financement en 3x\" disponible dans l'application Django.",
    cta: "Découvrir Django",
    link: "/services/django",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80"
  },
  {
    id: 3,
    title: "Nous vous accompagnons dans vos démarches pour changer de banque",
    subtitle: "Avec un service simple, rapide et gratuit de mobilité bancaire.",
    cta: "J'ouvre un compte facilement",
    link: "/comptes/ouvrir",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
  }
];

export const quickActions = [
  { icon: "CreditCard", label: "Ouvrir un compte", link: "/comptes/ouvrir" },
  { icon: "TrendingUp", label: "Financer un projet", link: "/credits" },
  { icon: "Shield", label: "Vous assurer", link: "/assurances" },
  { icon: "PiggyBank", label: "Mettre de l'argent de côté", link: "/epargne" }
];

export const solutions = [
  {
    id: 1,
    title: "Solutions Jeunes",
    description: "Prenez un bon départ dans la vie avec les offres, services et conseils adaptés à votre situation et vos besoins.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    link: "/solutions/jeunes"
  },
  {
    id: 2,
    title: "Solutions familles",
    description: "Famille Comprise c'est le programme d'accompagnement de La Banque Postale à destination des parents et de leurs enfants mineurs.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
    link: "/solutions/familles"
  },
  {
    id: 3,
    title: "Solutions seniors",
    description: "Nous vous accompagnons et vous conseillons dans tous vos projets pour la retraite.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    link: "/solutions/seniors"
  }
];

export const articles = [
  {
    id: 1,
    title: "Assurance vie : comment ça fonctionne ?",
    theme: "assurance vie",
    date: "19/02/2026",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    link: "/mag/assurance-vie"
  },
  {
    id: 2,
    title: "Comment résilier une assurance protection juridique ?",
    theme: "assurance",
    date: "18/02/2026",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    link: "/mag/resiliation-protection"
  },
  {
    id: 3,
    title: "Assistance juridique vs protection juridique : quelle différence ?",
    theme: "Juridique, assurance",
    date: "11/02/2026",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    link: "/mag/assistance-juridique"
  }
];

export const popularProducts = {
  comptesCartes: [
    { name: "La Formule de Compte", link: "/comptes/formule" },
    { name: "Le compte spécial jeune 18-29 ans", link: "/comptes/jeune" },
    { name: "Le compte mineur 12-17 ans", link: "/comptes/mineur" },
    { name: "La carte Visa Premier", link: "/cartes/visa-premier" },
    { name: "Western Union", link: "/services/western-union" }
  ],
  epargne: [
    { name: "Livret A", link: "/epargne/livret-a" },
    { name: "Livret jeune", link: "/epargne/livret-jeune" },
    { name: "LDDS", link: "/epargne/ldds" },
    { name: "Assurance Vie", link: "/epargne/assurance-vie" },
    { name: "Placements financiers", link: "/epargne/placements" },
    { name: "ISR", link: "/epargne/isr" }
  ],
  credits: [
    { name: "Prêt personnel Projet", link: "/credits/pret-personnel" },
    { name: "Prêt personnel Auto", link: "/credits/pret-auto" },
    { name: "Prêt personnel Véhicule vert", link: "/credits/vehicule-vert" },
    { name: "Prêt personnel Travaux", link: "/credits/travaux" },
    { name: "Prêt personnel Travaux vert", link: "/credits/travaux-verts" },
    { name: "Rachat de crédit", link: "/credits/rachat" },
    { name: "Prêt personnel Etudiant", link: "/credits/etudiant" }
  ],
  immobilier: [
    { name: "Prêt habitat taux fixe", link: "/immobilier/taux-fixe" },
    { name: "Prêt Relais", link: "/immobilier/relais" },
    { name: "Prêt à taux zéro", link: "/immobilier/ptz" },
    { name: "Prêt Conventionné", link: "/immobilier/conventionne" },
    { name: "Eco prêt à taux zéro", link: "/immobilier/eco-ptz" }
  ],
  assurances: [
    { name: "Assurance Auto", link: "/assurances/auto" },
    { name: "Assurance Habitation", link: "/assurances/habitation" },
    { name: "Assurance Santé", link: "/assurances/sante" },
    { name: "Assurance 2 roues", link: "/assurances/2-roues" },
    { name: "Protection juridique", link: "/assurances/protection-juridique" },
    { name: "Assurance Scolaire", link: "/assurances/scolaire" }
  ]
};

export const footerLinks = {
  comptes: [
    { label: "Ouvrir un compte", url: "/comptes/ouvrir" },
    { label: "Formule de compte", url: "/comptes/formule" },
    { label: "Compte jeune", url: "/comptes/jeune" },
    { label: "Cartes bancaires", url: "/cartes" },
    { label: "Espaces clients", url: "/connexion" }
  ],
  epargne: [
    { label: "Livret A", url: "/epargne/livret-a" },
    { label: "Assurance vie", url: "/epargne/assurance-vie" },
    { label: "Placements financiers", url: "/epargne/placements" }
  ],
  credits: [
    { label: "Crédit immobilier", url: "/credits/immobilier" },
    { label: "Crédit consommation", url: "/credits/consommation" },
    { label: "Crédit auto", url: "/credits/auto" }
  ],
  assurances: [
    { label: "Assurance habitation", url: "/assurances/habitation" },
    { label: "Assurance auto", url: "/assurances/auto" },
    { label: "Assurance santé", url: "/assurances/sante" }
  ],
  aide: [
    { label: "Nous contacter", url: "/contact" },
    { label: "FAQ", url: "/faq" },
    { label: "Alertes et fraudes", url: "/alertes" },
    { label: "Tarifs", url: "/tarifs" }
  ]
};