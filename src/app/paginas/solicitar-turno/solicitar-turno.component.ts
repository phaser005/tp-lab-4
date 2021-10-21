import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'
import { FirebaseService } from '../../servicios/firebase.service'
import { Usuario } from '../../clases/usuario'
import { Turno } from '../../clases/turno'

@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.css']
})
export class SolicitarTurnoComponent implements OnInit {

  listadoEspecialistas!: Usuario[];
  
  //datos
  turno!: Turno;
  diasDisponibles: string[] = [];
  numeroDiaDisponible: string[] = [];
  nombreMesDisponible: string[] = [];
  fechasDisponibles: string[] = [];

  horariosDisponibles: string[] = [];

  //fecha actual
  fecha = new Date();
  diaActual = this.fecha.getDay()-1;
  mesActual = this.fecha.getMonth()+1;
  añoActual = this.fecha.getFullYear();
  diasDelMes = new Date(this.añoActual, this.mesActual + 1, 0).getDate();
  diasDeLaSemana:string[] = [ "domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
  mesesDelAño:string[] = [ "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio","agosto", "septiembre", "octubre", "noviembre", "diciembre"];

  creandoTurno:boolean = false;

  constructor(private auth:AuthService, private fire:FirebaseService) {
    this.listadoEspecialistas = []
    this.turno = new Turno();
  }

  ngOnInit(): void {
    this.fire.cargarUsuarios().valueChanges().subscribe(data =>{
      data.forEach(usuario =>{
        if(usuario.tipo === "especialista"){
          this.listadoEspecialistas.push(usuario);
        }
      })
    })
  }

  especialistaSeleccionado(nombre:string, apellido:string, especialidad:string){
    this.creandoTurno = true;
    this.turno.nombreEspecialista = nombre;
    this.turno.apellidoEspecialista = apellido;
    this.turno.especialidad = especialidad;

    var numeroDia;
    var numeroMes;

    var dia;
    for (let index = this.diaActual; index < this.diaActual+15; index++) {
      dia = this.diasDeLaSemana[new Date(this.añoActual, this.mesActual-1, index).getDay()]
      //console.log(dia + " - " + new Date(this.añoActual, this.mesActual-1, index));
      if(dia != "domingo"){
        numeroDia = new Date(this.añoActual, this.mesActual-1, index).getDate().toString();
        numeroMes = new Date(this.añoActual, this.mesActual-1, index).getMonth();

        this.diasDisponibles.push(dia);
        this.numeroDiaDisponible.push(numeroDia);
        this.nombreMesDisponible.push(numeroMes.toString());

        //console.log(dia + " " + numeroDia + " de " + this.mesesDelAño[numeroMes]);

      }
    }

    var fecha;
    for (let index = 0; index < this.diasDisponibles.length; index++) {
      fecha = this.diasDisponibles[index] + " " + this.numeroDiaDisponible[index] + "/" + this.nombreMesDisponible[index];
      this.fechasDisponibles.push(fecha);
    }


  }

  elegirHorario(index:any, hora:any){
    var userData = <Usuario> this.auth.loadLoginData()
    var fecha = new Date(this.añoActual, this.mesActual-1, this.diaActual, hora/1000)

    this.turno.fecha = fecha;
    this.turno.nombrePaciente = userData.nombre;
    this.turno.apellidoPaciente = userData.apellido;
    this.turno.obraSocial = userData.obraSocial;
    this.turno.estadoTurno = "creado";

    console.log(this.turno)

    try {
      this.fire.guardarTurno(this.turno)
      alert("El turno ha sido creado exitosamente");
    } catch (error) {
      alert(error);
    }
    
    this.creandoTurno = false;
    
  }

}
