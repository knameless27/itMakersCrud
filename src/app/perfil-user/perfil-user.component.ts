import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Respuesta, Usuario } from '../interfaces';
import { ActivatedRoute } from '@angular/router';

// Aqui uso la plantilla del formulario para editar el usuario
@Component({
  selector: 'perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.css']
})
export class PerfilUserComponent implements OnInit{
  public formLogin!: FormGroup;

  constructor(private fromBuilder: FormBuilder, private http: HttpClient, private route: ActivatedRoute) { }

  usuario: Usuario = {
    avatar: '',
    email: '',
    first_name: '',
    id: 0,
    last_name: ''
  };
  id: number = 1;
  editBool: boolean = false;

  // Aqui agarre los datos de la url para hacer las consultas del perfil seleccionado
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const {params} = paramMap
      this.id = params.id
    })
    this.formLogin = this.fromBuilder.group({
      nombre: ['', Validators.required],
      trabajo: ['', Validators.required],
    })

    this.http.get<Respuesta>(`https://reqres.in/api/users/${this.id}`).subscribe(({ data }) => {
      this.usuario = data;
    })
  }

  // Aqui borro el usuario
  borrar() {
    this.http.delete<Respuesta>(`https://reqres.in/api/users/${this.id}`).subscribe(() => {
      window.alert('Eliminado correctamente')
    }, e => window.alert('Ha ocurrido un error eliminando al usuario'));
  }

  // Aqui hago la edicion del usuario
  send(): any {
    if (this.formLogin.status === 'VALID') {
      const data = {
        name: this.formLogin.value.nombre,
        job: this.formLogin.value.trabajo
      }
      this.http.put<Respuesta>(`https://reqres.in/api/users/${this.id}`, data).subscribe(() => {
        window.alert('Editado correctamente')
      }, e => {
        window.alert("¡Ha ocurrido un error al editar!")
      })
    } else {
      window.alert("¡Hay campos incorrectos, o sin completar!")
    }
  }
}
