import {Routes} from "@angular/router";

import { ListComponent }   from './components/list/list.component';
import { ProductsComponent }  from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'list', component: ListComponent, canActivate: [AuthGuard]},
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
];