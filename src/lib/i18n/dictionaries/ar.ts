import type { DeepPartial } from '../merge';
import type { Dictionary } from './en';

const ar: DeepPartial<Dictionary> = {
  common: {
    loading: 'جارٍ التحميل…',
    save: 'حفظ',
    cancel: 'إلغاء',
    close: 'إغلاق',
    delete: 'حذف',
    edit: 'تعديل',
    add: 'إضافة',
    search: 'بحث…',
    back: 'رجوع',
    next: 'التالي',
    yes: 'نعم',
    no: 'لا',
    freePlan: 'مجاني',
    premiumPlan: 'مميز',
    perMonth: '/ شهر',
    perYear: '/ سنة',
    oneTime: 'دفعة واحدة'
  },
  nav: {
    home: 'الرئيسية',
    features: 'المزايا',
    categories: 'المجموعة',
    pricing: 'الأسعار',
    forSchools: 'للمدارس',
    login: 'تسجيل الدخول',
    getStarted: 'ابدأ مجانًا'
  },
  hero: {
    eyebrow: 'منصة كتب إلكترونية للأطفال مدعومة بالذكاء الاصطناعي',
    subtitle: 'منصة كتب إلكترونية للأطفال بصوت ذكاء اصطناعي ولغات متعددة — تجربة قراءة آمنة وممتعة ومفيدة لكل عائلة.',
    ctaStart: 'ابدأ القراءة مجانًا',
    ctaBrowse: 'تصفح المجموعة',
    usedBy: 'يستخدمها أكثر من 50,000 عائلة حول العالم'
  },
  categories: {
    title: 'استكشف حسب الفئة',
    all: 'الكل',
    bedtime: 'قصص ما قبل النوم',
    fairyTales: 'حكايات خرافية',
    adventure: 'مغامرة',
    animals: 'حيوانات',
    dinosaur: 'ديناصورات',
    space: 'الفضاء',
    science: 'علوم',
    learning: 'تعلّم',
    moralStories: 'قصص أخلاقية',
    more: 'المزيد'
  },
  auth: {
    loginTitle: 'مرحبًا بعودتك',
    registerTitle: 'أنشئ حسابك',
    name: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    confirmPassword: 'تأكيد كلمة المرور',
    forgotPassword: 'نسيت كلمة المرور؟',
    login: 'تسجيل الدخول',
    register: 'إنشاء حساب'
  },
  portal: {
    greeting: 'مرحبًا',
    library: 'المكتبة',
    favorites: 'المفضلة',
    settings: 'الإعدادات',
    logout: 'تسجيل الخروج'
  },
  reader: {
    playVoice: 'تشغيل الصوت',
    translate: 'ترجمة',
    favorite: 'مفضلة',
    page: 'صفحة'
  },
  footer: {
    tagline: 'Adventures eXplore Together. Unlimited Stories.',
    rights: 'جميع الحقوق محفوظة.'
  }
};

export default ar;
