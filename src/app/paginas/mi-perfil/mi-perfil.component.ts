import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'
import { Usuario } from '../../clases/usuario'

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  usuario!: Usuario;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.traerDatos();
  }

  traerDatos(){
    this.usuario = this.auth.loadLoginData();
  }
}
