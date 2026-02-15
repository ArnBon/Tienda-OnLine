import { EventEmitter, Injectable } from '@angular/core';
import { ProductoModel } from './producto-component/productoModel';
import { DatosServicio } from './datos-servicio';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {


   productos: {[llave:string]: ProductoModel} = { }; //diccionario con claves unicas generadas por firebase
   productosActualizados = new Subject<{[llave: string]: ProductoModel}>(); //Observable para notificar cambios en la lista de productos

   constructor(private datosServicio: DatosServicio) {}

  detalleProductoEmitter = new EventEmitter<ProductoModel>();

  obtenerProductos(){
  return this.datosServicio.listarProductos();
}

  setProductos(productos: {[llave:string]: ProductoModel}){
    this.productos = productos;
    this.productosActualizados.next(this.productos); //notificar a los suscriptores que la lista de productos ha sido actualizada
  }

  guardarProductoService(producto: ProductoModel, llave: string | null = null){
    if (llave === null) {
      //agregar nuevo producto
      this.datosServicio.agregarProducto(producto).subscribe(() => {
        this.refrescarProductos();
      });
    } else {
      this.datosServicio.modificarProducto(producto, llave).subscribe(() => {
        this.refrescarProductos();
      });
    }
  }

  getProductoByLlave(llave: string): ProductoModel | undefined{
    return this.productos[llave];
  }

  eliminarProductoService(llave: string){
    this.datosServicio.eliminarProducto(llave).subscribe(() => {
      this.refrescarProductos();
    });
  }

  refrescarProductos(){
    this.obtenerProductos().subscribe((productos: {[llave:string]: ProductoModel}) => {
      this.setProductos(productos); //actualizar el diccionario de productos
    });
  }
}
