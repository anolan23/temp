import backend from '../../services/backend';
import { Category } from '../types';

export async function getCategories() {
  const response = await backend.get<Category[]>('/items/categories');
  return response.data;
}
