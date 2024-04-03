import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ProductAboutPageComponent } from './pages/product-about-page/product-about-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RegisterPageComponent } from './pages/register-page/register.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { DataService } from './services/data.service';


import { RouterLink, RouterOutlet, provideRouter, withComponentInputBinding } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OrderAscPipePipe } from './util/order-asc-pipe.pipe';
import { OrderDescPipePipe } from './util/order-desc-pipe.pipe';
import { OrderByPipe } from './util/order-by.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductDetailsPageComponent,
    ProductAboutPageComponent,
    NavbarComponent,
    HeaderComponent,
    CategoryComponent,
    ProductsComponent,
    ContactPageComponent,
    ErrorPageComponent,
    RegisterPageComponent,
    LoginPageComponent,
    SidebarComponent,
    OrderAscPipePipe,
    OrderDescPipePipe,
    OrderByPipe,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
