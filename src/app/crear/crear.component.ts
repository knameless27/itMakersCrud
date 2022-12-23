import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  public formLogin!: FormGroup;

  constructor(private fromBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.formLogin = this.fromBuilder.group({
      nombre: ['', Validators.required],
      trabajo: ['', Validators.required],
    })
  }

  send(): any {
    if (this.formLogin.status === 'VALID') {
      const data = {
        name: this.formLogin.value.nombre,
        job: this.formLogin.value.trabajo
      }
      this.http.post('https://reqres.in/api/users', data).subscribe((res: any) => {
        //push a otra vista
        window.alert('Usuario creado correctamente')
      }, e => window.alert("¡Ha ocurrido un error al registrarse!"))
    } else {
      window.alert("¡Hay campos incorrectos, o sin completar!")
    }
  }
}
