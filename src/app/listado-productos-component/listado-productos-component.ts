import { Component } from '@angular/core';
import { ProductoComponent } from '../producto-component/producto-component';
import { ProductoModel } from '../producto-component/productoModel';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from '../formulario-component/formulario-component';


@Component({
  selector: 'app-listado-productos-component',
  imports: [ProductoComponent, FormsModule, FormularioComponent],
  templateUrl: './listado-productos-component.html',
  styleUrl: './listado-productos-component.css',
})
export class ListadoProductosComponent {

  productos: ProductoModel[] = [
    new ProductoModel('Pantalón', 130.0),
    new ProductoModel('Camisa', 80.0),
    new ProductoModel('Playera', 50.0),
  ];

  //esto no se que es
  descripcionInput: string = '';
  precioInput: number | null = null;

  agregarProductoPadre(producto: ProductoModel){
    this.productos.push(producto);
  }
}
