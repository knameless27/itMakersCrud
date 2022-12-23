import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Respuesta, Usuario } from '../interfaces';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  constructor(private http: HttpClient) {}

  usuarios: Usuario[] = [];
  page: number = 0;
  per_page: number = 0;
  total: number = 0;
  total_pages: number = 0;

  ngOnInit(): void {
    this.http.get<Respuesta>('https://reqres.in/api/users').subscribe(({data})=>{
      this.usuarios = data;
      })
  }
}
