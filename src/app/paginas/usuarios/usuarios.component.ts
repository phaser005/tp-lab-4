import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario'
import { FirebaseService } from '../../servicios/firebase.service'
import { AuthService } from '../../servicios/auth.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public listaUsuarios:Usuario[] = [];

  constructor(private firebase:FirebaseService, private auth:AuthService) { }

  ngOnInit(): void {
    this.firebase.cargarUsuarios().valueChanges().subscribe(data => {
      this.listaUsuarios = data;
    })
  }

  habilitarUsuario(email:string){
    this.auth.habilitarUsuario(email);
  }

  deshabilitarUsuario(email:string){
    this.auth.deshabilitarUsuario(email);
  }

}
