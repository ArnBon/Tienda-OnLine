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
    productId: number | null = null;
    descripcionInput: string = '';
    precioInput: number | null = null;

    constructor(private productoService: ProductoService,
                private router: Router,
                private route: ActivatedRoute){}

    ngOnInit(){
      //verificar si hay un id en la ruta
      const id = this.route.snapshot.paramMap.get('id');
      if (id){
        //cargar el producto desde el servicio
        const producto = this.productoService.getProductoById(Number(id));
        if(producto){
          this.productId = producto.id;
          this.descripcionInput = producto.descripcion;
          this.precioInput = producto.precio;
        }
      }
    }


guardarProducto(evento: Event){
    evento.preventDefault(); //evitar que se recargue la pagina

    //validar que sean valores correctos
    if (this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0) {
      console.log('Debe ingresar una descripción y un precio válido');
      return;
    }

    const producto = new ProductoModel(this.productId, this.descripcionInput, this.precioInput);
    //agregamos el nuevo producto usando el servicio
    this.productoService.agregarProductoService(producto); //esto viene del servicio

    //Limpiar campos
   this.limpiarFormulario();

    //navegar a la lista de productos
    this.router.navigate(['/']);
  }

  eliminarProducto(){
    if(this.productId !== null){
      this.productoService.eliminarProductoService(this.productId);
      this.limpiarFormulario();
      this.router.navigate(['/']);
    }
  }

  cancelar(){
    this.router.navigate(['/']);
  }

    limpiarFormulario(){
    this.productId = null;
    this.descripcionInput = '';
    this.precioInput = null;
  }

}
