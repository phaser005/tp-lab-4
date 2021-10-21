import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { FirebaseService } from '../../servicios/firebase.service'
import { AuthService } from '../../servicios/auth.service'
import { CaptchaService } from '../../servicios/captcha.service'
import { AngularFireStorage } from '@angular/fire/storage';
import { Usuario } from '../../clases/usuario'
import { Especialidad } from '../../clases/especialidad'


@Component({
  selector: 'app-alta-especialista',
  templateUrl: './alta-especialista.component.html',
  styleUrls: ['./alta-especialista.component.css']
})
export class AltaEspecialistaComponent implements OnInit {

  public imageA: any;

  public especialistaForm!: FormGroup;
  public especialidades!:Especialidad[];

  constructor(private fb:FormBuilder, private firebase:FirebaseService, private captcha:CaptchaService, private firestorage: AngularFireStorage, private auth:AuthService) {
  }

  ngOnInit(): void {

    this.captcha.generateCaptcha();
    
    this.especialistaForm = this.fb.group({
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
      'especialidad': ['', Validators.required],
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

    this.firebase.cargarEspecialidades().valueChanges().subscribe(data => {
      this.especialidades = data;
      console.log(this.especialidades);
    })
  }

  onFileSelected(event:any){
    this.imageA = event.target.files[0];
  }

  cambiarEspecialidad(e:any) {
    this.especialistaForm.controls['especialidad'].setValue(e.target.value);
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

    nuevoUsuario.nombre = this.especialistaForm.get("nombre")?.value;
    nuevoUsuario.apellido = this.especialistaForm.get("apellido")?.value;
    nuevoUsuario.edad = this.especialistaForm.get("edad")?.value;
    nuevoUsuario.DNI = this.especialistaForm.get("dni")?.value;
    nuevoUsuario.especialidad = this.especialistaForm.get("especialidad")?.value;
    nuevoUsuario.email = this.especialistaForm.get("email")?.value;
    nuevoUsuario.password = this.especialistaForm.get("password")?.value;
    nuevoUsuario.tipo = "especialista"
    nuevoUsuario.habilitado = false;
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
