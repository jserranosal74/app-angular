import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './components/clientes/clientes.component';

export const routes: Routes = [
  { path: 'clientes', component: ClientesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'propiedades'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
