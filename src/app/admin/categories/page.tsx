import { getCategories } from '@/lib/data/books';
import { CategoriesClient } from '@/components/admin/CategoriesClient';

export const dynamic = 'force-dynamic';

export default async function AdminCategoriesPage() {
  const categories = await getCategories();
  return <CategoriesClient initialCategories={categories} />;
}
