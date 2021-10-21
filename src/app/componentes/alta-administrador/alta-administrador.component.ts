import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { FirebaseService } from '../../servicios/firebase.service'
import { AuthService } from '../../servicios/auth.service'
import { CaptchaService } from '../../servicios/captcha.service'
import { AngularFireStorage } from '@angular/fire/storage';
import { Usuario } from '../../clases/usuario'


@Component({
  selector: 'app-alta-administrador',
  templateUrl: './alta-administrador.component.html',
  styleUrls: ['./alta-administrador.component.css']
})
export class AltaAdministradorComponent implements OnInit {

  public imageA: any;
  public administradorForm!: FormGroup;

  constructor(private fb:FormBuilder, private firebase:FirebaseService, private captcha:CaptchaService, private firestorage: AngularFireStorage, private auth:AuthService) { }

  ngOnInit(): void {

    this.captcha.generateCaptcha();

    this.administradorForm = this.fb.group({
      'nombre': ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]*")
      ]],
      'apellido': ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]*")
      ]],
      'edad': ['', [
        Validators.required,
        Validators.min(18)
      ]],
      'dni': ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern("^[0-9]*")
      ]],
      'email': ['', [
        Validators.required, 
        Validators.email
      ]],
      'password': ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      'imagen1': ['', Validators.required]
    })

  }

  onFileSelected(event:any){
    this.imageA = event.target.files[0];
  }

  async enviar(){

    var nuevoUsuario = await this.createUser();

    if(this.captcha.checkCaptcha()){
    
    }

    console.log(nuevoUsuario);

    //this.auth.uploadImage();
  }

  async createUser(){
    var nuevoUsuario = new Usuario();

    nuevoUsuario.nombre = this.administradorForm.get("nombre")?.value;
    nuevoUsuario.apellido = this.administradorForm.get("apellido")?.value;
    nuevoUsuario.edad = this.administradorForm.get("edad")?.value;
    nuevoUsuario.DNI = this.administradorForm.get("dni")?.value;
    nuevoUsuario.email = this.administradorForm.get("email")?.value;
    nuevoUsuario.password = this.administradorForm.get("password")?.value;
    nuevoUsuario.tipo = "administrador"
    nuevoUsuario.habilitado = true;
    await this.saveImage(nuevoUsuario, this.imageA);
    return nuevoUsuario
  }

  async saveImage(usuario:Usuario, imageA:any){

    var storageRef = this.firestorage.storage.ref();

    let referencia = `userImages/${imageA.name}`;

    var uploadTask = storageRef.child(referencia).put(imageA).then(element => {

      this.firestorage.storage.ref(referencia).getDownloadURL().then((link) => {
        usuario.imagen1 = link;
        this.auth.AddNewUser(usuario);
        
      })
    });

  }
}
