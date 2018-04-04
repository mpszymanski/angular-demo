import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import {APP_BASE_HREF} from '@angular/common';

import { LoginComponent } from '../login/login.component';
import { ListComponent } from '../list/list.component';
import { ProductsComponent } from '../products/products.component';
import { FormsModule } from '@angular/forms';

import { PricePipe } from '../../pipes/price.pipe';
import { ProductFilterPipe } from '../../pipes/product-filter.pipe';

import { AuthService } from '../../services/auth.service';

import { CookieModule } from 'ngx-cookie';

import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../routes';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule, 
        CookieModule.forRoot(), 
        RouterTestingModule
      ],
      declarations: [ 
        LoginComponent
      ],
      providers: [ AuthService, {provide: APP_BASE_HREF, useValue: '/'} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
