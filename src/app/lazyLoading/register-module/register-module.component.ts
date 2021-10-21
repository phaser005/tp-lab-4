import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'
import { Usuario } from '../../clases/usuario'

@Component({
  selector: 'app-register-module',
  templateUrl: './register-module.component.html',
  styleUrls: ['./register-module.component.css']
})
export class RegisterModuleComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  verificarUsuario(){
    var tipo =""
    var user: Usuario;
    if(this.auth.SearchLogData() === true){
      user = this.auth.loadLoginData()
      tipo = user.tipo;
    }
    return tipo;
  }
}
