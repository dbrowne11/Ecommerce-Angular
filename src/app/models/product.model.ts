import { SafeResourceUrl } from "@angular/platform-browser";
import { ICategory } from "./category.model";
import { externCategory } from "./externCategory.model";

export interface IProduct {
    id: number;
    productName: string;
    price: number;
    productDescription: string;
    productImage: string;
    productImages: string[];
    safeImages: SafeResourceUrl[]
    category: externCategory;

}