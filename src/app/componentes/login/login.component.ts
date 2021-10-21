import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service'
import { Usuario } from '../../clases/usuario'
import { FirebaseService } from '../../servicios/firebase.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  public listaUsuarios:Usuario[] = [];

  constructor(private fb:FormBuilder, private auth:AuthService, private firebase:FirebaseService) {
    
    this.form = this.fb.group({
      'email': ['', [
        Validators.required, 
        Validators.email
      ]],
      'password': ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
    }); 

   }

  ngOnInit(): void {
    this.firebase.cargarUsuarios().valueChanges().subscribe(data => {
      this.listaUsuarios = data;
    })
  }

  async LogMeIn(){
    this.auth.logMeIn(this.form.get("email")?.value, this.form.get("password")?.value)
  }

  AutoCompleteValidUser(email:string, password:string){
        this.form.get('email')?.setValue(email);
        this.form.get('password')?.setValue(password);
        this.LogMeIn();
  }

}
