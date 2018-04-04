import { Injectable } from '@angular/core';
import { ListItem } from '../models/list-item';
import { Product } from '../models/product';

@Injectable()
export class ListService {
  list:ListItem[] = [];

  constructor() { 
    let listJson = localStorage.getItem('MyList');
    this.list = JSON.parse(listJson);
  }

  getList(): ListItem[] {
    if(this.list)
      return this.list;
    return [];
  }

  addItem(product: Product) {
    let existing = this.list.findIndex((item) => item.product.id === product.id);

    if(existing == -1) {
      this.list.push({product: product, number: 1, status: false});
    } else {
      this.list[existing].number++;
    }
    this.saveList();
  }

  removeItem(product: Product) {
    let index = this.list.findIndex((item) => item.product.id === product.id)
    if(index != -1) {
      this.list.splice(index, 1);
    }
    this.saveList();
  }

  saveList() {
    let listJson = JSON.stringify(this.list);
    localStorage.setItem('MyList', listJson);
  }
}
