import { Component } from '@angular/core';
import { ProductoModel } from '../producto-component/productoModel';
import { ProductoService } from '../producto-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-component',
  imports: [FormsModule],
  templateUrl: './formulario-component.html',
  styleUrl: './formulario-component.css',
})
export class FormularioComponent {

    descripcionInput: string = '';
    precioInput: number | null = null;

    constructor(private productoService: ProductoService){}


agregarProducto(){
    //validar que sean valores correctos
    if (this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0) {
      console.log('Debe ingresar una descripción y un precio válido');
      return;
    }

    const producto = new ProductoModel(this.descripcionInput, this.precioInput);
    //agregamos el nuevo producto usando el servicio
    this.productoService.agregarProducto(producto);

    //Limpiar campos
    this.descripcionInput = '';
    this.precioInput = null;
  }

}
