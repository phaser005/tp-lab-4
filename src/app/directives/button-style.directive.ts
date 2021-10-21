import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appButtonStyle]'
})
export class ButtonStyleDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.width = "50px";
    elementRef.nativeElement.style.borderRadius = "5em";
    elementRef.nativeElement.style.marginTop = "-13px";
   }

}
