import { Routes } from "@angular/router";
import { AllProductsComponent } from "./pages/all-products/all-products.component";
import { OneProductComponent } from "./pages/one-product/one-product.component";

export const catalogRoutes: Routes = [
  { path: '', component: AllProductsComponent },
  { path: 'product/:id', component: OneProductComponent },
]
