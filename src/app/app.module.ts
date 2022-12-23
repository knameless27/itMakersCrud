import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListUserComponent } from './list-user/list-user.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { RegisterComponent } from './register/register.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { CrearComponent } from './crear/crear.component';
import { FooterComponent } from './footer/footer.component';

// Aqui declare todos los componentes necesarios para la realizacion de este proyecto
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ListUserComponent,
    RegisterComponent,
    PerfilUserComponent,
    CrearComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
