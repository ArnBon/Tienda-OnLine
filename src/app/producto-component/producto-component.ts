import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-component',
  imports: [],
  templateUrl: './producto-component.html',
  styleUrl: './producto-component.css',
})
export class ProductoComponent {

  titulo = 'Listado de Productos'

  productos = {
    descripcion: 'Nuevo Producto',
    precio: '$100'
  }

}
