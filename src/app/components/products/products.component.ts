import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injectable, Input, NgZone, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { OrderAscPipePipe } from 'src/app/util/order-asc-pipe.pipe';
import { OrderByPipe } from 'src/app/util/order-by.pipe';
import { OrderDescPipePipe } from 'src/app/util/order-desc-pipe.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Injectable({
  providedIn: 'root',
})
export class ProductsComponent {
  products: IProduct[] = [];
  ascending: boolean | null = null;
  pipe: OrderByPipe = new OrderByPipe();

  constructor(private dataService: DataService, 
    private router: Router,
    private changeDetection: ChangeDetectorRef,
    private zone: NgZone) {
      this.dataService.getProducts().subscribe((response: IProduct[]) => {
        console.log(response);
        this.products = response;
        this.changeDetection.detectChanges();
      })
  }

  loadImage(imageArr: string[]) {
    console.log("loading... " + imageArr)
    // imageArr.forEach(element => {
      
    // });
    return imageArr;
  }

  onClickHandler(id: any) {
    console.log("navigating to product-detail/"+id)
    this.router.navigate(['product-detail',id])
  }


  setOrder(ascending: boolean) {
    this.zone.run(() => {
      this.ascending = ascending;
    // this.products = this.sortProducts(this.products!, ascending);
      this.changeDetection.detectChanges();
    })
    this.ascending = ascending;
    // this.products = this.sortProducts(this.products!, ascending);
    this.changeDetection.detectChanges();
    
    // this.dataService.getProducts().subscribe(response => {
    //   this.products = this.sortProducts(response, ascending)
    //   this.changeDetection.detectChanges()
    // }, () => {}, () => {this.changeDetection.detectChanges()})
    // this.products = this.pipe.transform(this.products, ascending)
  }

  trackProduct(index: number, product: IProduct): number | null {
    return product ? product.id: null;
  }

  sortProducts(arr: IProduct[], ascending: boolean | null): IProduct[] {
    
    if(ascending == null) {
      return arr;
    }
    let out: IProduct[] = [...arr];
    if (ascending) {
      out.sort((a, b) => b.id - a.id);
    } else {
      out.sort((a, b) => a.id - b.id);
    }
    
    return out;
  }

}
