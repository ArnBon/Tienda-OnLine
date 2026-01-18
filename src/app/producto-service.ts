import { EventEmitter, Injectable } from '@angular/core';
import { ProductoModel } from './producto-component/productoModel';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
    //Variable para el id siguiente y unico
    private idSiguiente = 1;

   productos: ProductoModel[] = [ ];

   constructor() {
    //inicializo con algunos productos
    this.inicializarProductos();
   }

   private inicializarProductos(){
     const producto1 = new ProductoModel(this.idSiguiente++, 'Camisa', 29.99 );
     const producto2 = new ProductoModel(this.idSiguiente++, 'Pantalones', 49.99 );
     const producto3 = new ProductoModel(this.idSiguiente++, 'Zapatos', 79.99 );
     //se agregan al array de productos
     this.productos.push(producto1, producto2, producto3);
   }

detalleProductoEmitter = new EventEmitter<ProductoModel>();

  agregarProductoService(producto: ProductoModel){
    if (producto.id === null) {
      producto.id = this.idSiguiente++;
      this.productos.push(producto);
    } else {
      const index = this.productos.findIndex(p => p.id === producto.id);
      if(index !== -1){
        this.productos[index] = producto;
      }
    }
  }


  getProductoById(id: number): ProductoModel | undefined{
    return this.productos.find(productos => productos.id === id);
  }


  eliminarProductoService(id: number){
    const index = this.productos.findIndex(productos => productos.id === id);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  }







}
