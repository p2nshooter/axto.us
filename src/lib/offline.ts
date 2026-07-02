'use client';

const KEY = 'axto_offline_books';

export type OfflineBook = {
  bookId: string;
  slug: string;
  titleEn: string;
  titleId: string;
  coverEmoji: string;
  coverPalette: string;
  savedAt: number;
  pages: { pageNumber: number; textEn: string; textId: string }[];
};

function readAll(): Record<string, OfflineBook> {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(window.localStorage.getItem(KEY) || '{}');
  } catch {
    return {};
  }
}

function writeAll(data: Record<string, OfflineBook>) {
  window.localStorage.setItem(KEY, JSON.stringify(data));
}

export function saveBookOffline(book: OfflineBook) {
  const all = readAll();
  all[book.bookId] = book;
  writeAll(all);
}

export function removeBookOffline(bookId: string) {
  const all = readAll();
  delete all[bookId];
  writeAll(all);
}

export function isBookSavedOffline(bookId: string): boolean {
  return bookId in readAll();
}

export function getOfflineBooks(): OfflineBook[] {
  return Object.values(readAll()).sort((a, b) => b.savedAt - a.savedAt);
}
