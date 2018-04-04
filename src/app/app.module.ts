import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { PricePipe } from './pipes/price.pipe';
import { ProductFilterPipe } from './pipes/product-filter.pipe';

import { ListService } from './services/list.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { AppRoutingModule } from './app-routing.module';

import { CookieModule } from 'ngx-cookie';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProductsComponent,
    PricePipe,
    ProductFilterPipe,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, AppRoutingModule,
    CookieModule.forRoot()
  ],
  providers: [ListService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
