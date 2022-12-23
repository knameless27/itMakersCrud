import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListUserComponent } from './list-user/list-user.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { CrearComponent } from './crear/crear.component';

// Aqui realice las rutas del proyecto (las deje un poco abiertas para que hubiese mas facilidad a la hora de movilizarse en la aplicacion,
// pero perfectamente podria haber hecho mas validaciones y asignarle una mayor seguridad)
const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'registro',
    component: RegisterComponent
  },
  {
    path:'lista',
    component: ListUserComponent
  },
  {
    path:'crear',
    component: CrearComponent
  },
  {
    path:'perfil/:id',
    component: PerfilUserComponent
  },
  {
    path:'**',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
