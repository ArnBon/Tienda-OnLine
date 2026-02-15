import { Component } from '@angular/core';
import { ProductoComponent } from '../producto-component/producto-component';
import { FormularioComponent } from '../formulario-component/formulario-component';
import { ProductoService } from '../producto-service';
import { ProductoModel } from '../producto-component/productoModel';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-listado-productos-component',
  imports: [ProductoComponent, FormularioComponent, FormsModule],
  templateUrl: './listado-productos-component.html',
  styleUrl: './listado-productos-component.css',
})
export class ListadoProductosComponent {

  // productos: ProductoModel[] = [];
  productos: {[llave:string]:ProductoModel} = {};
  productosSubscription: Subscription | null = null;

  constructor(private productoService: ProductoService,
              private router: Router){}

  ngOnInit(){
    this.cargarProducto();

    this.productosSubscription =
      this.productoService.productosActualizados.subscribe((productos) => {
        this.productos = productos;
    });
  }

    cargarProducto(){
    this.productoService.obtenerProductos().subscribe((productos: {[llave:string]:ProductoModel}) => {
      this.productos = productos;
      this.productoService.setProductos(productos);
    });
  }

    obtenerLlaves(): string[]{
      if(this.productos){
        return Object.keys(this.productos);
      }
      return [];
    }

    agregarProducto(){
    this.router.navigate(['agregar']);
  }

  ngOnDestroy(): void {
    if(this.productosSubscription != null)
      this.productosSubscription.unsubscribe();
  }
}
