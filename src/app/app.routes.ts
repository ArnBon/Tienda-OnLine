import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos-component/listado-productos-component';
import { FormularioComponent } from './formulario-component/formulario-component';
import { ErrorComponent } from './error-component/error-component';

export const routes: Routes = [
  { path: '', component: ListadoProductosComponent },
  { path: 'listado',    component: ListadoProductosComponent},
  { path: 'agregar',    component: FormularioComponent},
  { path: 'editar/:llave', component: FormularioComponent},
  { path: '**',         component: ErrorComponent},

];
