import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { PaisesComponent } from './componentes/paises/paises.component';
import { MarcaComponent } from './components/marca/marca.component';
import { MarcasComponent } from './components/marcas/marcas.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    PaisesComponent,
    MarcaComponent,
    MarcasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
