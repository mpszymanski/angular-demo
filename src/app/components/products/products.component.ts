import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ListItem } from '../../models/list-item';
import { PRODUCTS } from '../../data/mock-products';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = PRODUCTS;
  list: ListItem[];
  search: string;

  constructor(private listService: ListService) { 
    this.list = this.listService.getList();
  }

  ngOnInit() { }

  addItem(product: Product) {
  	this.listService.addItem(product);
  }

  isOnMyList(product) {
    return this.list.filter((item) => item.product.id === product.id).length > 0;
  }
}
