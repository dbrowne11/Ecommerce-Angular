import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAboutPageComponent } from './product-about-page.component';

describe('ProductAboutPageComponent', () => {
  let component: ProductAboutPageComponent;
  let fixture: ComponentFixture<ProductAboutPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAboutPageComponent]
    });
    fixture = TestBed.createComponent(ProductAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
