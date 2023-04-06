import { CategoryType } from '../enums/category-type';
import { Product } from './product';

export class Category {
  id!: number;
  name!: string;
  description!: string;
  products!: Product[];
  type!: CategoryType;
}
