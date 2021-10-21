import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'
import { Usuario } from '../../clases/usuario'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
