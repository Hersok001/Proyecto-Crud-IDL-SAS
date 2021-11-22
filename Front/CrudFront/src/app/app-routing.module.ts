import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleCiudadComponent } from './ciudad/detalle-ciudad.component';
import { EditarCiudadComponent } from './ciudad/editar-ciudad.component';
import { ListaCiudadComponent } from './ciudad/lista-ciudad.component';
import { NuevoCiudadComponent } from './ciudad/nuevo-ciudad.component';

const routes: Routes = [
  {path: '', component: ListaCiudadComponent},
  {path: 'detalle/:id', component: DetalleCiudadComponent},
  {path: 'nuevo', component: NuevoCiudadComponent},
  {path: 'editar/:id', component: EditarCiudadComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
