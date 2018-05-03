import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';
import {
  MatCardModule
} from '@angular/material/card';

const components = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule
];

@NgModule({
  imports: components,
  exports: components,
})
export class MaterialModule {}
