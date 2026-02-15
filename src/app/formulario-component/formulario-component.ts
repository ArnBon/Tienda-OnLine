import { Component } from '@angular/core';
import { ProductoModel } from '../producto-component/productoModel';
import { ProductoService } from '../producto-service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-component',
  imports: [FormsModule],
  templateUrl: './formulario-component.html',
  styleUrl: './formulario-component.css',
})
export class FormularioComponent {
    llaveProducto: string | null = null;
    descripcionInput: string = '';
    precioInput: number | null = null;

    constructor(private productoService: ProductoService,
                private router: Router,
                private route: ActivatedRoute){}

  ngOnInit(){
      //verificar si hay un id en la ruta
      const llave = this.route.snapshot.paramMap.get('llave');
      if (llave){
        //cargar el producto desde el servicio
        const producto = this.productoService.getProductoByLlave(llave);
        if(producto){
          this.llaveProducto = llave;
          this.descripcionInput = producto.descripcion;
          this.precioInput = producto.precio;
      }
    }
  }


  guardarProducto(evento: Event){

    //validar que sean valores correctos
    if (this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0) {
      console.log('Debe ingresar una descripción y un precio válido');
      return;
    }
    const producto = new ProductoModel( this.descripcionInput, this.precioInput);
    //agregamos el nuevo producto usando el servicio
    this.productoService.guardarProductoService(producto, this.llaveProducto); //esto viene del servicio
    //Limpiar campos
   this.limpiarFormulario();
    //navegar a la lista de productos
    this.router.navigate(['/']);
  }

  eliminarProducto(){
    if(this.llaveProducto !== null){
      this.productoService.eliminarProductoService(this.llaveProducto);
      this.limpiarFormulario();
      this.router.navigate(['/']);
    }
  }

  cancelar(){
    this.router.navigate(['/']);
  }

  limpiarFormulario(){
    this.llaveProducto = null;
    this.descripcionInput = '';
    this.precioInput = null;
  }

}
