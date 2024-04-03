import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product.model';

@Pipe({
  name: 'orderAscPipe'
})
export class OrderAscPipePipe implements PipeTransform {

  transform(arr: IProduct[], callback: (item: any)=> boolean): IProduct[] {
    arr.sort(this._comparePriceAsc)
    return arr;
  }

  
  private _comparePriceAsc(product1: IProduct, product2: IProduct) {
    return product1.price - product2.price
  }
}
