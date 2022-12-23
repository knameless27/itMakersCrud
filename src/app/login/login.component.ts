import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin!: FormGroup;

  constructor(private fromBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fromBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  send(): any {
    if (this.formLogin.status === 'VALID'){
      this.http.post('https://reqres.in/api/login', this.formLogin.value).subscribe((res: any) => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('id', res.id)
        this.router.navigate(['/','lista'])
      }, e => window.alert("¡Ha ocurrido un error al iniciar de sesion!"))
    } else {
      window.alert("¡Hay campos incorrectos, o sin completar!")
    }
  }
}
