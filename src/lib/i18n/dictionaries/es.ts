import type { DeepPartial } from '../merge';
import type { Dictionary } from './en';

const es: DeepPartial<Dictionary> = {
  common: {
    loading: 'Cargando…',
    save: 'Guardar',
    cancel: 'Cancelar',
    close: 'Cerrar',
    delete: 'Eliminar',
    edit: 'Editar',
    add: 'Añadir',
    search: 'Buscar…',
    back: 'Atrás',
    next: 'Siguiente',
    yes: 'Sí',
    no: 'No',
    freePlan: 'Gratis',
    premiumPlan: 'Premium',
    perMonth: '/ mes',
    perYear: '/ año',
    oneTime: 'pago único'
  },
  nav: {
    home: 'Inicio',
    features: 'Funciones',
    categories: 'Colección',
    pricing: 'Precios',
    forSchools: 'Para Escuelas',
    login: 'Iniciar sesión',
    getStarted: 'Empezar Gratis'
  },
  hero: {
    eyebrow: 'Plataforma de libros para niños con IA',
    subtitle:
      'Una plataforma de libros infantiles con voz de IA y múltiples idiomas: experiencias de lectura seguras, divertidas y enriquecedoras.',
    ctaStart: 'Empezar a Leer Gratis',
    ctaBrowse: 'Ver Colección',
    usedBy: 'Usado por más de 50.000 familias en todo el mundo'
  },
  categories: {
    title: 'Explorar por categoría',
    all: 'Todo',
    bedtime: 'Para Dormir',
    fairyTales: 'Cuentos de Hadas',
    adventure: 'Aventura',
    animals: 'Animales',
    dinosaur: 'Dinosaurios',
    space: 'Espacio',
    science: 'Ciencia',
    learning: 'Aprendizaje',
    moralStories: 'Historias con Moraleja',
    more: 'Más'
  },
  auth: {
    loginTitle: 'Bienvenido de nuevo',
    registerTitle: 'Crea tu cuenta',
    name: 'Nombre completo',
    email: 'Correo electrónico',
    password: 'Contraseña',
    confirmPassword: 'Confirmar contraseña',
    forgotPassword: '¿Olvidaste tu contraseña?',
    login: 'Iniciar sesión',
    register: 'Crear cuenta'
  },
  portal: {
    greeting: 'Hola',
    library: 'Biblioteca',
    favorites: 'Favoritos',
    settings: 'Configuración',
    logout: 'Cerrar sesión'
  },
  reader: {
    playVoice: 'Reproducir Voz',
    translate: 'Traducir',
    favorite: 'Favorito',
    page: 'Página'
  },
  footer: {
    tagline: 'Adventures eXplore Together. Unlimited Stories.',
    rights: 'Todos los derechos reservados.'
  }
};

export default es;
