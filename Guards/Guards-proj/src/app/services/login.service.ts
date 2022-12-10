import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(){
    localStorage.setItem('token', 'dufhg132143')
  }

  doLogout(){
    localStorage.clear()
  }
}
