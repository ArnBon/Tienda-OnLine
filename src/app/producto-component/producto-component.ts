import { Component, Input } from '@angular/core';
import { ProductoModel } from './productoModel';

@Component({
  selector: '[app-producto-component]',
  imports: [],
  templateUrl: './producto-component.html',
  styleUrl: './producto-component.css'
})
export class ProductoComponent {

  titulo = 'Listado de Productos'

@Input() productoHijo!: ProductoModel;

}
