import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatosServicio {

  url = 'https://tienda-online-37839-default-rtdb.firebaseio.com/'

constructor(private httpClient: HttpClient){}



}
