import { Component, EventEmitter, Output } from '@angular/core';
import { ICategory } from 'src/app/models/category.model';
import { SubCategory } from 'src/app/models/subCategory.model';
import { DataService } from 'src/app/services/data.service';
import { ProductsComponent } from '../products/products.component';
import { IProduct } from 'src/app/models/product.model';

class DisplayOptions {
  sort?: boolean | null;
  categories?: string[] | null;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  subcategories: SubCategory[] = [];
  categories: ICategory[] = [];

  displayOptions: DisplayOptions = new DisplayOptions();
  @Output() sortAsc: EventEmitter<any> = new EventEmitter();
  @Output() sordDesc: EventEmitter<any> = new EventEmitter();

  constructor(private dataService: DataService, private productsRef: ProductsComponent) {
    this.dataService.getCategories().subscribe((response: ICategory[]) => {
      this.categories = response;
    });
    this.dataService.getSubCategories().subscribe((response: SubCategory[]) => {
      this.subcategories = response;
    });
  }

  handleCategorySelect() {

  }

  handleSubCategorySelect() {

  }



  sortByPrice(ascending: boolean) {
    this.productsRef.setOrder(ascending);
    // if (ascending) {
    //   this.productsRef.setOrder(true);
    //   //this.productsRef.products.sort(this._comparePriceAsc)
    // } else {
    //   this.productsRef.setOrder(false);
    //   // this.productsRef.products.sort(this._comparePriceDesc)
    // }
  
    
  }

  _comparePriceAsc(product1: IProduct, product2: IProduct) {
    return product1.price - product2.price
  }

  _comparePriceDesc(product1: IProduct, product2: IProduct) {
    return product2.price - product1.price
  }
}
