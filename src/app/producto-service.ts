import { Injectable } from '@angular/core';
import { ProductoModel } from './producto-component/productoModel';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {

   productos: ProductoModel[] = [
    new ProductoModel('Pantalón', 130.0),
    new ProductoModel('Camisa', 80.0),
    new ProductoModel('Playera', 50.0),
  ];

  agregarProducto(producto: ProductoModel){
    this.productos.push(producto);
  }

}
