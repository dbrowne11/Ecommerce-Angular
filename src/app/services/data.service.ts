import { HttpClient } from '@angular/common/http';
import { Injectable, SecurityContext } from '@angular/core';

import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';
import { DomSanitizer } from '@angular/platform-browser';
import { externCategory } from '../models/externCategory.model';
import { SubCategory } from '../models/subCategory.model';
import { OrderByPipe } from '../util/order-by.pipe';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 

  }
  url = "https://api.escuelajs.co/api/v1";
  myUrl = "http://localhost:8080/api/v1"

  getCategories(): Observable<externCategory[]> {
    return this.http.get<externCategory[]>(`${this.myUrl}/categories`);
  }

  getSubCategories(): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(`${this.myUrl}/subcategories`)
  } 

  getProductsByCategory(catId: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.myUrl}/products/cat/${catId}`)
  }
  getProductsBySubCategory(subCatId: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.myUrl}/products/cat/${subCatId}`)
  }

  // sortByPrice(ascending: boolean): IProduct[] {
  //   let out: IProduct[] = []
  //   out = this.getProducts().subscribe((response) => {
  //     var arr: IProduct[] = response;
  //     let pipe: OrderByPipe = new OrderByPipe();
  //     out = pipe.transform(arr, ascending);
  //     return out;
  //     // var pipe: OrderByPipe = new OrderByPipe
  //   })
    
  // }

  // getProducts(): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(`${this.url}/products`);
  // }

  // getProductById(id: any): Observable<IProduct> {
  //   return this.http.get<IProduct>(`${this.url}/products/${id}`)
  // }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.myUrl}/products`);
  }

  getProductById(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.myUrl}/products/${id}`)
  }


}
