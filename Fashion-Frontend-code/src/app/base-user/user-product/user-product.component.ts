import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {TokenStorageService} from '../../auth/service-auth/token-storage.service';
import {CategoryService} from '../../services/category.service';
import {SupplierService} from '../../services/supplier.service';
import {PictureService} from '../../services/picture.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {Product} from '../../models/product';
import {Supplier} from '../../models/supplier';
import {Category} from '../../models/category';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent implements OnInit {
   product: Product[];
  category: any;
  supplier: any;
  picture: any[];
  name: any;
  productId: number;

  constructor(private productService: ProductService,
              private token: TokenStorageService,
              private categoryService: CategoryService,
              private supplierService: SupplierService,
              private pictureService: PictureService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.getListProduct();
  }
  getListProduct() {
    this.productService.getListProduct().subscribe(data => {
      this.product = data;
      console.log(data);
    });
  }
}
