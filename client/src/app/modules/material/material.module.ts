import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatCardModule,
  MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    LayoutModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
})
export class MaterialModule { }
