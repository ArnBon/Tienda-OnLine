import { Component } from '@angular/core';
import { ProductoComponent } from '../producto-component/producto-component';
import { ProductoModel } from '../producto-component/productoModel';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-listado-productos-component',
  imports: [ProductoComponent, FormsModule],
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

  agregarProducto(){
    //validar que sean valores correctos
    if (this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0) {
      console.log('Debe ingresar una descripción y un precio válido');
      return;      
    }

    const producto = new ProductoModel(this.descripcionInput, this.precioInput);
    this.productos.push(producto);

    //Limpiar campos
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
