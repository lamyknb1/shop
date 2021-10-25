import { Injectable } from '@angular/core';
import {Product} from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartProductService {

  products: Product[] = [
    {
      productId: 1,
      quantity: 2
    },
    {
      productId: 2,
      quantity: 1
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  findById(id: number): Product  {
    return this.products.find(product => product.productId === id)!;

  }

  findIndexById(id: number): number {
    return this.products.findIndex(product => product.productId === id);
  }

  updateQuantity(id: number, quantity: number) {
    console.log(id);
    const product = this.findById(id);
    console.log(product);
    if (product) {
      product.quantity = quantity || 0;
    }
  }

  removeProduct(id: number): boolean {
    const index = this.findIndexById(id);

    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }

    return false;
  }
}
