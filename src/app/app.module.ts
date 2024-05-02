import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { BancosComponent } from './components/bancos/bancos.component';
import { ColoresComponent } from './components/colores/colores.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    MarcasComponent,
    BancosComponent,
    ColoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
