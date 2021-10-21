import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  transform(date:string, hour:number): unknown {
    var format = "";
    if(hour < 10){
      format = date + " a las " + "0" + hour.toString() +":00";
    }else if(hour >= 10){
      format = date + " a las " + hour.toString() +":00";
    }

    return format;
  }

}
