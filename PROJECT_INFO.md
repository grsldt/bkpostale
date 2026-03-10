# La Banque Postale - Clone du Site de Connexion

Clone pixel-perfect de la page de connexion de La Banque Postale (https://www.labanquepostale.fr/particulier/connexion-espace-client.html)

## 🎨 Caractéristiques du Design

### Layout
- **Design en deux colonnes** : Formulaire de connexion à gauche, informations à droite
- **Responsive** : S'adapte aux écrans desktop et mobile
- **Couleurs officielles** : Bleu La Banque Postale (#003D7A), bleu clair (#D5E5F4), blanc

### Composants Principaux

#### En-tête
- Logo La Banque Postale
- Icônes de recherche et menu
- Bordure inférieure subtile

#### Formulaire de Connexion (Gauche)
- Titre : "Connexion à votre compte particulier"
- Champ identifiant (10 chiffres uniquement)
- Case à cocher "Mémoriser mon identifiant"
- Bouton "Continuer"
- Lien "Identifiant / Mot de passe oublié"

#### Section d'Information (Droite)
- Titre : "La Banque Postale, citoyenne"
- Carte d'information "Espace Assurance La Banque Postale"
- Liens vers les services d'assurance
- Background bleu clair avec effet de profondeur

#### Bannière de Cookies
- Information complète sur l'utilisation des cookies
- Trois options : "TOUT ACCEPTER", "UNIQUEMENT AUTORISER LES COOKIES ESSENTIELS", "PERSONNALISER"
- Peut être fermée

## 🚀 Fonctionnalités

### Validation du Formulaire
- ✅ Accepte uniquement les chiffres dans le champ identifiant
- ✅ Validation de la longueur (10 chiffres requis)
- ✅ Messages d'erreur en français
- ✅ Mémorisation de l'identifiant (localStorage)

### Interactions
- ✅ Effets hover sur tous les boutons et liens
- ✅ Transitions fluides sur les interactions
- ✅ Toast notifications pour les retours utilisateur
- ✅ Gestion de la bannière de cookies

### Design Adaptatif
- ✅ Layout deux colonnes sur desktop
- ✅ Layout simple colonne sur mobile
- ✅ Typographie responsive
- ✅ Espacements optimisés

## 🎯 Technologies Utilisées

- **React 19** - Framework JavaScript
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Shadcn/ui** - Composants UI (Button, Input, Checkbox, Toast)
- **Lucide React** - Icônes

## 📝 Notes sur l'Implémentation

### Ce qui est MOCKÉ
- **Authentification** : Le formulaire ne se connecte pas à un véritable backend
- **Navigation** : Les liens pointent vers "#" 
- **Assurance** : Les liens d'assurance sont fictifs
- **Cookies** : La bannière est fonctionnelle mais ne stocke pas réellement de préférences

### Données Frontend Uniquement
- Toutes les interactions sont gérées côté client
- Utilisation de localStorage pour la mémorisation de l'identifiant
- Toast notifications pour les retours utilisateur

## 🔐 Sécurité

> **Note Importante** : Cette application est un **clone visuel uniquement** à des fins de démonstration. Elle ne gère aucune donnée bancaire réelle et ne doit pas être utilisée en production pour des transactions financières.

## 🌐 Déploiement

L'application est accessible à l'adresse :
`https://postal-banking-1.preview.emergentagent.com`
