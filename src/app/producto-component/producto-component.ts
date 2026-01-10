import { Component, Input } from '@angular/core';
import { ProductoModel } from './productoModel';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../producto-service';

@Component({
  selector: '[app-producto-component]',
  imports: [CommonModule],
  templateUrl: './producto-component.html',
  styleUrl: './producto-component.css',
})
export class ProductoComponent {

 @Input() productoModel!: ProductoModel;

 constructor(private productoService: ProductoService) { }

  emitirDetalleProducto() {
    //usamos el eventEmitter del servicio para emitir el producto seleccionado
    this.productoService.detalleProductoEmitter.emit(this.productoModel);
  }

}
