import { Component } from '@angular/core';
import { ProductoComponent } from '../producto-component/producto-component';
import { FormularioComponent } from '../formulario-component/formulario-component';
import { ProductoService } from '../producto-service';
import { ProductoModel } from '../producto-component/productoModel';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-listado-productos-component',
  imports: [ProductoComponent, FormularioComponent, FormsModule],
  templateUrl: './listado-productos-component.html',
  styleUrl: './listado-productos-component.css',
})
export class ListadoProductosComponent {

  productos: ProductoModel[] = [];

  constructor(private productoService: ProductoService,
              private router: Router){}

  ngOnInit(){
    this.productos = this.productoService.productos;

  }

  agregarProducto(){
    this.router.navigate(['agregar']);
  }
}
