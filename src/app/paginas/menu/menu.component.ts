import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'
import { Usuario } from '../../clases/usuario'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private auth:AuthService) {

   }

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

  logInVerification(){
    return this.auth.SearchLogData();
  }

  logOut(){
    this.auth.logOut();
  }

}
