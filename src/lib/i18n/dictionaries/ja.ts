import type { DeepPartial } from '../merge';
import type { Dictionary } from './en';

const ja: DeepPartial<Dictionary> = {
  common: {
    loading: '読み込み中…',
    save: '保存',
    cancel: 'キャンセル',
    close: '閉じる',
    delete: '削除',
    edit: '編集',
    add: '追加',
    search: '検索…',
    back: '戻る',
    next: '次へ',
    yes: 'はい',
    no: 'いいえ',
    freePlan: '無料',
    premiumPlan: 'プレミアム',
    perMonth: '/ 月',
    perYear: '/ 年',
    oneTime: '一括払い'
  },
  nav: {
    home: 'ホーム',
    features: '機能',
    categories: 'コレクション',
    pricing: '料金',
    forSchools: '学校向け',
    login: 'ログイン',
    getStarted: '無料で始める'
  },
  hero: {
    eyebrow: 'AI搭載の子供向け電子書籍プラットフォーム',
    subtitle: 'AI音声と多言語対応の子供向け電子書籍プラットフォーム。すべての家族に安全で楽しく、学びのある読書体験を。',
    ctaStart: '無料で読み始める',
    ctaBrowse: 'コレクションを見る',
    usedBy: '世界中で50,000以上の家族が利用中'
  },
  categories: {
    title: 'カテゴリーから探す',
    all: 'すべて',
    bedtime: 'おやすみ前のお話',
    fairyTales: 'おとぎ話',
    adventure: '冒険',
    animals: '動物',
    dinosaur: '恐竜',
    space: '宇宙',
    science: '科学',
    learning: '学習',
    moralStories: '道徳のお話',
    more: 'もっと見る'
  },
  auth: {
    loginTitle: 'おかえりなさい',
    registerTitle: 'アカウントを作成',
    name: '名前',
    email: 'メールアドレス',
    password: 'パスワード',
    confirmPassword: 'パスワード確認',
    forgotPassword: 'パスワードをお忘れですか？',
    login: 'ログイン',
    register: 'アカウント作成'
  },
  portal: {
    greeting: 'こんにちは',
    library: 'ライブラリ',
    favorites: 'お気に入り',
    settings: '設定',
    logout: 'ログアウト'
  },
  reader: {
    playVoice: '音声を再生',
    translate: '翻訳',
    favorite: 'お気に入り',
    page: 'ページ'
  },
  footer: {
    tagline: 'Adventures eXplore Together. Unlimited Stories.',
    rights: 'All rights reserved.'
  }
};

export default ja;
