import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ProductDetailsPageComponent } from "./pages/product-details-page/product-details-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { ProductAboutPageComponent } from "./pages/product-about-page/product-about-page.component";
import { ProductsPageComponent } from "./pages/products-page/products-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { RegisterPageComponent } from "./pages/register-page/register.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { AuthGuard } from "./guard/auth.guard";

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'                       },
    { path: 'home', component: HomePageComponent                            },
    { path: 'products', component: ProductsPageComponent, canActivate: [AuthGuard] },
    { path: 'product-detail/:id', component: ProductDetailsPageComponent, canActivate: [AuthGuard] },
    { path: 'about', component: ProductAboutPageComponent, canActivate: [AuthGuard] },
    { path: 'contact', component:  ContactPageComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterPageComponent                     },
    { path: 'login', component:  LoginPageComponent                     },
    { path: "**", component: ErrorPageComponent                             }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}