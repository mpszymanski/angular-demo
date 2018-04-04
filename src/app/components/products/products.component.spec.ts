import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';

import { FormsModule } from '@angular/forms';

import { PricePipe } from '../../pipes/price.pipe';
import { ProductFilterPipe } from '../../pipes/product-filter.pipe';

import { ListService } from '../../services/list.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ProductsComponent, PricePipe, ProductFilterPipe],
      providers: [ ListService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
