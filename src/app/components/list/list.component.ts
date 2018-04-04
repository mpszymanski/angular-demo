import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../models/list-item';
import { Product } from '../../models/product';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: ListItem[];
  
  constructor(private listService: ListService) { }

  ngOnInit() {
  	this.items = this.listService.getList();
  }

  removeItem(product: Product) {
  	this.listService.removeItem(product);
  }

  complitedCount() {
    return this.items.filter(item => item.status === true).length;
  }

  totalCount() {
    return this.items.length;
  }

  totalPriceSum() {
    let sum = 0;
    this.items.filter(item => item.status === true).forEach((item) => {
      sum += item.number * item.product.price;
    });

    return sum;
  }

  onListChange() {
    this.listService.saveList();
  }

}
