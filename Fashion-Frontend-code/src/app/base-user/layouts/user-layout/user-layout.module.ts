import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {UserLayoutRoutes} from './user-layout.routing';
import {UserProductComponent} from '../../user-product/user-product.component';
import {CartComponent} from '../../cart/cart.component';
import {HomeComponent} from '../../home/home.component';
import {CardProductComponent} from '../../user-product/card-product/card-product.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    UserProductComponent,
    CartComponent,
    HomeComponent,
    CardProductComponent
  ]
})

export class UserLayoutModule { }
