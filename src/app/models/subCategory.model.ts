import { externCategory } from "./externCategory.model";
import { IProduct } from "./product.model";

export interface SubCategory {
    id: number;
    subCategoryName: string;
    subCategoryDescription: string;
    subCategoryImage: string;
    position: number;
    status: boolean;
    category: externCategory;
    products: IProduct[];
}