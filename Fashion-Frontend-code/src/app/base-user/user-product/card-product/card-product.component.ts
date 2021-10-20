import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';
import {PictureService} from '../../../services/picture.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  @Input() product: Product;
  @Input() productId: number;
  listpicture = [];
  constructor( private pictureService: PictureService) { }

  ngOnInit(): void {
    this.getpiccture(this.productId);
    console.log(this.product);
  }
  getpiccture(id: number) {
    console.log(id);
    this.listpicture = [];
    this.pictureService.getListPicture1(id).subscribe(data => {
      this.listpicture = data;
      console.log(this.listpicture);
    });
  }
}
