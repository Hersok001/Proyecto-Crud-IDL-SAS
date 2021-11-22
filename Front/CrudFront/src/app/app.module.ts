import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaCiudadComponent } from './ciudad/lista-ciudad.component';
import { DetalleCiudadComponent } from './ciudad/detalle-ciudad.component';
import { NuevoCiudadComponent } from './ciudad/nuevo-ciudad.component';
import { EditarCiudadComponent } from './ciudad/editar-ciudad.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ListaCiudadComponent,
    DetalleCiudadComponent,
    NuevoCiudadComponent,
    EditarCiudadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
