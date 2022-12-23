import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Aqui hice mi template para los formularios, no use el ngModel porque senti que no me hacia falta y que con esta solucion
  // perfectamente podria llegar a cumplir con el reto

  public formLogin!: FormGroup;

  constructor(private fromBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  // Cuando inicia la vista, le asigno las validaciones requeridas
  ngOnInit(): void {
    this.formLogin = this.fromBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    })
  }

  // Aqui veriifico si los campos son validos y si las contraseñas son iguales, luego armo los datos y los mando por medio de la peticion post
  // Luego los redirijo a la vista de la lista de usuarios
  send(): any {
    if (this.formLogin.status === 'VALID' && this.formLogin.value.password === this.formLogin.value.password2) {
      const data = {
        password: this.formLogin.value.password,
        email: this.formLogin.value.email
      }
      this.http.post('https://reqres.in/api/register', data).subscribe((res: any) => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('id', res.id)
        this.router.navigate(['/', 'lista'])
      }, e => window.alert("¡Ha ocurrido un error al registrarse!"))
    } else {
      window.alert("¡Hay campos incorrectos, o sin completar!")
    }
  }
}
