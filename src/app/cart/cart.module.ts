import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './layouts/cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CartRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    RouterLink,
    SharedModule,
    MatTableModule,
    MatMenuModule,
  ],
})
export class CartModule {}
