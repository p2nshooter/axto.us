import type { DeepPartial } from '../merge';
import type { Dictionary } from './en';

const fr: DeepPartial<Dictionary> = {
  common: {
    loading: 'Chargement…',
    save: 'Enregistrer',
    cancel: 'Annuler',
    close: 'Fermer',
    delete: 'Supprimer',
    edit: 'Modifier',
    add: 'Ajouter',
    search: 'Rechercher…',
    back: 'Retour',
    next: 'Suivant',
    yes: 'Oui',
    no: 'Non',
    freePlan: 'Gratuit',
    premiumPlan: 'Premium',
    perMonth: '/ mois',
    perYear: '/ an',
    oneTime: 'paiement unique'
  },
  nav: {
    home: 'Accueil',
    features: 'Fonctionnalités',
    categories: 'Collection',
    pricing: 'Tarifs',
    forSchools: 'Pour les Écoles',
    login: 'Connexion',
    getStarted: 'Commencer Gratuitement'
  },
  hero: {
    eyebrow: "Plateforme de livres numériques pour enfants propulsée par l'IA",
    subtitle:
      "Une plateforme de livres numériques pour enfants avec voix IA et plusieurs langues — une lecture sûre, amusante et enrichissante pour toute la famille.",
    ctaStart: 'Commencer à Lire Gratuitement',
    ctaBrowse: 'Parcourir la Collection',
    usedBy: 'Utilisé par plus de 50 000 familles dans le monde'
  },
  categories: {
    title: 'Explorer par catégorie',
    all: 'Tout',
    bedtime: 'Histoires du Soir',
    fairyTales: 'Contes de Fées',
    adventure: 'Aventure',
    animals: 'Animaux',
    dinosaur: 'Dinosaures',
    space: 'Espace',
    science: 'Science',
    learning: 'Apprentissage',
    moralStories: 'Histoires Morales',
    more: 'Plus'
  },
  auth: {
    loginTitle: 'Content de vous revoir',
    registerTitle: 'Créez votre compte',
    name: 'Nom complet',
    email: 'E-mail',
    password: 'Mot de passe',
    confirmPassword: 'Confirmer le mot de passe',
    forgotPassword: 'Mot de passe oublié ?',
    login: 'Connexion',
    register: 'Créer un compte'
  },
  portal: {
    greeting: 'Bonjour',
    library: 'Bibliothèque',
    favorites: 'Favoris',
    settings: 'Paramètres',
    logout: 'Déconnexion'
  },
  reader: {
    playVoice: 'Lire à Voix Haute',
    translate: 'Traduire',
    favorite: 'Favori',
    page: 'Page'
  },
  footer: {
    tagline: 'Adventures eXplore Together. Unlimited Stories.',
    rights: 'Tous droits réservés.'
  }
};

export default fr;
