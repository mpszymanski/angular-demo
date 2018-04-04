import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';

import { PricePipe } from './pipes/price.pipe';
import { ProductFilterPipe } from './pipes/product-filter.pipe';

import { AuthService } from './services/auth.service';

import { CookieModule } from 'ngx-cookie';

import { routes } from './routes';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        FormsModule, 
        CookieModule.forRoot()
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
      ],
      providers: [
        AuthService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
