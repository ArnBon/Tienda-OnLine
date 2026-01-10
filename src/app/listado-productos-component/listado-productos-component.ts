import { Component } from '@angular/core';
import { ProductoComponent } from '../producto-component/producto-component';
import { FormularioComponent } from '../formulario-component/formulario-component';
import { ProductoService } from '../producto-service';
import { ProductoModel } from '../producto-component/productoModel';


@Component({
  selector: 'app-listado-productos-component',
  imports: [ProductoComponent, FormularioComponent],
  templateUrl: './listado-productos-component.html',
  styleUrl: './listado-productos-component.css',
})
export class ListadoProductosComponent {

  productos: ProductoModel[] = [];

  constructor(private productoService: ProductoService){
    this.productoService.detalleProductoEmitter.subscribe(producto => {
      alert(`Producto: ${producto.descripcion}\nPrecio: ${producto.precio} $`);
    });
  }

  ngOnInit(){
    this.productos = this.productoService.productos;
  }
}
