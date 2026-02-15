import { Component, Input } from '@angular/core';
import { ProductoModel } from './productoModel';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../producto-service';
import { Router } from '@angular/router';

@Component({
  selector: '[app-producto-component]',
  imports: [CommonModule],
  templateUrl: './producto-component.html',
  styleUrl: './producto-component.css',
})
export class ProductoComponent {

 @Input() productoModel!: ProductoModel;
 @Input() llave!: string; //esta llave es la que se genera en firebase para cada producto, es unica y se usa para identificar el producto en las operaciones de editar y eliminar

 constructor(private productoService: ProductoService,
              private router: Router) { }

  emitirDetalleProducto() {
    //usamos el eventEmitter del servicio para emitir el producto seleccionado
    this.productoService.detalleProductoEmitter.emit(this.productoModel);
  }

  editarProducto(){
    //pasasmos la llave del producto a la ruta de edición
    this.router.navigate(['/editar', this.llave]);
  }

}
