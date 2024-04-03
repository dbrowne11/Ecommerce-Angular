import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product.model';

@Pipe({
  name: 'orderDescPipe'
})
export class OrderDescPipePipe implements PipeTransform {

  transform(arr: IProduct[], ...args: any[]): IProduct[] {
    arr.sort(this._comparePriceDesc)
    return arr;
  }


  _comparePriceDesc(product1: IProduct, product2: IProduct) {
    return product2.price - product1.price
  }
}
