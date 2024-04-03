import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/category.model';
import { externCategory } from 'src/app/models/externCategory.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: externCategory[] = [];

  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getCategories().subscribe((response: externCategory[]) => {
      console.log(response);
      this.categories = response;
      console.log(`Categories: ${JSON.stringify(this.categories)}`)
    })
  }

  onClickHandler() {
    this.router.navigateByUrl('products')
  }
}
