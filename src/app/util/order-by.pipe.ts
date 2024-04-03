import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product.model';

@Pipe({
  name: 'orderBy',
  pure:false
})
export class OrderByPipe implements PipeTransform {

  transform(arr: IProduct[], order: boolean | null): IProduct[] {
    if (arr.length === 0 || order == null) return arr;
    let output: IProduct[] = []
    if (order) {
      output = structuredClone(arr)
      output.sort(this._comparePriceAsc)

    }
    else {
      output = structuredClone(arr)
      output.sort(this._comparePriceDesc)
    }
    return output;
  }

  
  private _comparePriceAsc(product1: IProduct, product2: IProduct) {
    return product1.price - product2.price
  }

  _comparePriceDesc(product1: IProduct, product2: IProduct) {
    return product2.price - product1.price
  }
}
