import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  //1. declaro variable 
  urlUser="https://jsonplaceholder.typicode.com/users";
  nombreAPP="Lista de usuarios con Interceptor"
  //2. Constructor
  constructor( private http:HttpClient) { }

  //3. funcion
  getUser(){
    return this.http.get<any>(this.urlUser);
  }

}
