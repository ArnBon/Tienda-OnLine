import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ProductoModel } from '../producto-component/productoModel';

@Component({
  selector: 'app-formulario-component',
  imports: [],
  templateUrl: './formulario-component.html',
  styleUrl: './formulario-component.css',
})
export class FormularioComponent {

  @ViewChild('descripcionInput') descripcionInput!: ElementRef;
  @ViewChild('precioInput') precioInput!: ElementRef;
  @Output() nuevoProducto = new EventEmitter<ProductoModel>();

  agregarProductoHijo(evento: Event){
    evento.preventDefault();
    //validar que sean valores correctos
    if (this.descripcionInput.nativeElement.value.trim() === '' || this.precioInput == null || this.precioInput.nativeElement.value <= 0) {
      console.log('Debe ingresar una descripción y un precio válido');
      return;
    }

    const producto = new ProductoModel
    (
      this.descripcionInput.nativeElement.value,
      this.precioInput.nativeElement.value
    );
    this.nuevoProducto.emit(producto);

    //Limpiar campos
    this.descripcionInput.nativeElement.value = '';
    this.precioInput.nativeElement.value = null;
  }

}

