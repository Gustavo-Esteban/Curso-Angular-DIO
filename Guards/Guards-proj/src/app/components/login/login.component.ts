import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servie: LoginService) { }

  ngOnInit(): void {
  }

  logar(){
    this.servie.doLogin()
  }

  deslogar(){
    this.servie.doLogout()
  }

}
