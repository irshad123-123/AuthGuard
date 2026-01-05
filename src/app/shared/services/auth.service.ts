import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin, IsignUp } from '../models/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // /api/auth/register
  base_url : string = `https://auth-git-main-iamrkjs-projects.vercel.app`

  constructor(private _http : HttpClient) { }

  login(Obj : Ilogin):Observable<any>{
    return this._http.post(`${this.base_url}/api/auth/login`,Obj)
  }
  signUp(Obj : IsignUp):Observable<any>{
    return this._http.post(`${this.base_url}/api/auth/register`,Obj)
  }


  setToken(token : string){
    localStorage.setItem('token',token)
  }
  setUserRole(userRole : string){
    localStorage.setItem('userRole', userRole)
  }

  getToken(){
    return localStorage.getItem('token')
  }
  getUserRole(){
    return localStorage.getItem('userRole')
  }

}
