import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], args?: string): Product[] {
    if(args === undefined || args === '')
      return value;

    return value.filter(product => product.name.toLowerCase().includes(args.toLowerCase()));
  }
}
