import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Especialidad } from '../clases/especialidad';
import { Usuario } from '../clases/usuario';
import { Turno } from '../clases/turno';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  referenciaEspecialidad!: AngularFirestoreCollection<Especialidad>;
  private especialidadesPath = '/especialidades';

  referenciaUsuarios!: AngularFirestoreCollection<Usuario>;
  private usuariosPath = '/usuarios';

  referenciaTurnos!: AngularFirestoreCollection<Turno>;
  private turnosPath = '/turnos';

  constructor(private db: AngularFirestore) {
    this.referenciaTurnos = db.collection(this.turnosPath)
  }

  cargarUsuarios(){
    this.referenciaUsuarios = this.db.collection(this.usuariosPath)
      return this.referenciaUsuarios;
  }

  cargarEspecialidades(): AngularFirestoreCollection<Especialidad>{
      this.referenciaEspecialidad = this.db.collection(this.especialidadesPath)
      return this.referenciaEspecialidad;
  }

  guardarTurno(turno:Turno){
    this.referenciaTurnos.add({...turno});
  }

  cargarTurnos(){
    this.referenciaTurnos = this.db.collection(this.turnosPath)
      return this.referenciaTurnos;
  }

}
