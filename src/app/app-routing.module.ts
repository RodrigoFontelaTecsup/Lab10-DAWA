import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarDatosComponent } from './mostrar-datos/mostrar-datos.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  // RUTA PRINCIPAL -> MOSTRAR FORMULARIO
  {
    path: '', 
    component: FormularioComponent
  },
  // RUTA SECUNDARIA -> MOSTRAR DATOS INGRESADOS EN EL FORMULARIO
  { 
    path: 'mostrar-datos',
    component: MostrarDatosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
