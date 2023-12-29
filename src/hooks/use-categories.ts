import useSWR from 'swr';
import { getCategories } from '../lib/api/items';

export function useCategories() {
  const swrResponse = useSWR('/items/categories', getCategories);
  return swrResponse;
}
