import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatRippleModule,
  MatToolbarModule,
  MatDialogModule
} from '@angular/material';
import {
  MatCardModule
} from '@angular/material/card';
import {
  MatInputModule
} from '@angular/material/input';

const components = [
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatRippleModule,
  MatToolbarModule
];

@NgModule({
  imports: components,
  exports: components
})
export class MaterialModule {}
