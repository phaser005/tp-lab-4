import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { CaptchaService } from '../../servicios/captcha.service'
import { AuthService } from '../../servicios/auth.service'
import { AngularFireStorage } from '@angular/fire/storage';
import { Usuario } from '../../clases/usuario'

@Component({
  selector: 'app-alta-paciente',
  templateUrl: './alta-paciente.component.html',
  styleUrls: ['./alta-paciente.component.css']
})
export class AltaPacienteComponent implements OnInit {

  public pacienteForm!: FormGroup;
  public imageA: any;
  public imageB: any;

  constructor(public fb:FormBuilder, private auth:AuthService, private captcha:CaptchaService, private firestorage: AngularFireStorage) {
   }

  ngOnInit(): void {

    this.captcha.generateCaptcha();
    
    this.pacienteForm = this.fb.group({
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
      'obraSocial': ['', Validators.required],
      'email': ['', [
        Validators.required, 
        Validators.email
      ]],
      'password': ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      'imagen1': ['', Validators.required],
      'imagen2': ['', Validators.required]
    })

  }

  onFileSelectedA(event:any){
    //console.log(event.target.files[0]);
    this.imageA = event.target.files[0];
  }

  onFileSelectedB(event:any){
    this.imageB = event.target.files[0];
  }
    
  
  async enviar(){

    if(this.captcha.checkCaptcha()){
      var nuevoUsuario = await this.createUser();
    }else{
      alert("El captcha introducido no es valido")
    }

  }

  async createUser(){
    var nuevoUsuario = new Usuario();

    nuevoUsuario.nombre = this.pacienteForm.get("nombre")?.value;
    nuevoUsuario.apellido = this.pacienteForm.get("apellido")?.value;
    nuevoUsuario.edad = this.pacienteForm.get("edad")?.value;
    nuevoUsuario.DNI = this.pacienteForm.get("dni")?.value;
    nuevoUsuario.obraSocial = this.pacienteForm.get("obraSocial")?.value;
    nuevoUsuario.email = this.pacienteForm.get("email")?.value;
    nuevoUsuario.password = this.pacienteForm.get("password")?.value;
    nuevoUsuario.tipo = "paciente"
    nuevoUsuario.habilitado = true;
    await this.saveImage(nuevoUsuario, this.imageA, this.imageB);
    return nuevoUsuario

  }


  async saveImage(usuario:Usuario, imageA:any, imageB:any){

    var storageRef = this.firestorage.storage.ref();

    let referencia = `userImages/${imageA.name}`;
    let referencia2 = `userImages/${imageB.name}`;

    var uploadTask = storageRef.child(referencia).put(imageA).then(element => {

      this.firestorage.storage.ref(referencia).getDownloadURL().then((link) => {
        usuario.imagen1 = link

        var uploadTask = storageRef.child(referencia2).put(imageB).then(element => {
      
          this.firestorage.storage.ref(referencia2).getDownloadURL().then((link) => {
            usuario.imagen2 = link
            this.auth.AddNewUser(usuario);
          })
        });
        
      })
    });

  }
}
