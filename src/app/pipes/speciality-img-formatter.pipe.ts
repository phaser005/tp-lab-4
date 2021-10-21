import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseService } from '../servicios/firebase.service'
import { Especialidad } from '../clases/especialidad'

@Pipe({
  name: 'specialityImgFormatter'
})
export class SpecialityImgFormatterPipe implements PipeTransform {

  public especialidades:Especialidad[] = [];

  constructor(private fire:FirebaseService) {
    this.fire.cargarEspecialidades().valueChanges().subscribe(data => {
      this.especialidades = data;
    })
  }

  transform(especialidad:string): string{
    var returnedValue:string = ""
    this.especialidades.forEach(element => {
      console.log(element.especialidad);
      if(especialidad === element.especialidad){
        returnedValue = element.imagen;
      }
    });

    
    return returnedValue;
  }

}
