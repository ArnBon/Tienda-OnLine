import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos-component/listado-productos-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListadoProductosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tienda On line');
}
