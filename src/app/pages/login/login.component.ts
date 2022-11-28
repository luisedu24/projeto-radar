import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
    ) { }

    loginUsuario = { login: 'teste', senha: '123'}

    loginForm = this.fb.group({
      login: (''),
      senha:(''),
    });


  ngOnInit(): void {
  }

  verificaLogin(){
    if(this.loginUsuario.login == this.loginForm.value.login && this.loginUsuario.senha == this.loginForm.value.senha){
      this.auth.setLogin(this.loginForm.value.login)
      this.router.navigate(['home'])
     }
    }

}
