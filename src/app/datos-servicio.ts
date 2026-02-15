import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from './producto-component/productoModel';

@Injectable({
  providedIn: 'root',
})
export class DatosServicio {

  url = 'https://tienda-online-37839-default-rtdb.firebaseio.com/'

constructor(private httpClient: HttpClient){}

listarProductos(): Observable<{[llave:string]: ProductoModel}> {
  return this.httpClient.get<{[llave: string]: ProductoModel}>(this.url + 'datos.json');
}

agregarProducto(producto: ProductoModel): Observable<any>{
  return this.httpClient.post(`${this.url}datos.json`, producto); //aqui se genera el id unico en firebase
}

modificarProducto(producto: ProductoModel, llave:string): Observable<any>{
  const url_modificar = `${this.url}datos/${llave}.json`;
  return this.httpClient.put(url_modificar, producto);
}

eliminarProducto(llave:string): Observable<any>{
  const url_eliminar = `${this.url}datos/${llave}.json`;
  return this.httpClient.delete(url_eliminar)
}







}




