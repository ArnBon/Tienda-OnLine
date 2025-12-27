import { Component, Input } from '@angular/core';
import { ProductoModel } from './productoModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[app-producto-component]',
  imports: [CommonModule],
  templateUrl: './producto-component.html',
  styleUrl: './producto-component.css',
})
export class ProductoComponent {

 @Input() productoModel!: ProductoModel;

}
