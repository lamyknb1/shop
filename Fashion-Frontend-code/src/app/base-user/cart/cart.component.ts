import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {PromoCodeService} from './promo-code.service';
import {CartProductService} from './cart-product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  numberItem:number =0;
  title = 'test';
  subtotal:number=0;
  total:number=0;
  tax:number=0;
  discountPercent: number = 0;
  discount: number = 0;
  taxPercent: number = 10;
  constructor(private productService: CartProductService,
              private promoCodeService: PromoCodeService) {

  }
  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.ngDocheck();

  }
  products: Product[]=[];
  ngDocheck(){
    this.numberItem = 0;
    this.subtotal = 0;
    for (const product of this.products) {
      this.numberItem += product.quantity;
      this.subtotal += product.price * product.quantity;
    }
    this.discount = (this.subtotal * this.discountPercent) / 100;
    this.tax = ((this.subtotal - this.discount) * this.taxPercent) / 100;
    this.total=this.subtotal+this.tax-this.discount;
  }
  removeProduct(productId: number){
    this.productService.removeProduct(productId);
    this.ngDocheck();

  }
  updateQuantity(p:{productId:number,quantity:number})
  {
    this.productService.updateQuantity(p.productId,p.quantity);
    this.ngDocheck();
  }
  handleApplyPromo(code:string){
    this.discountPercent=this.promoCodeService.applyPromoCode(code);
    this.discount=(this.subtotal*this.discountPercent) /100;
    if (this.discount>0){
      alert('promo code was applied');
    } else {
      alert(' sorry wrong promocode!')
    }
    this.ngDocheck();
  }

}
