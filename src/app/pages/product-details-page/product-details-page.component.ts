
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css'],
  
})
export class ProductDetailsPageComponent {
  id: any;
  product?: IProduct;
  imgIndex: number = 0;
  displayImg: string ="";

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    dataService.getProductById(this.id).subscribe(
      (response) => {
        console.log(response)
        this.product = response
        this.displayImg = this.product!.productImages[0];
      });
    
  }

  setImgIndex(url: string) {
    this.displayImg = url;
    // if (i - 1 < this.product!.images.length) {
    //   return;
    // }
    console.log("Setting image index")
    // this.imgIndex = i;
  }

  addToCart() {
    console.log("adding to cart");
  }
}
