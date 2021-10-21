import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCardStyle]'
})
export class CardStyleDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.fontFamily = "'Zilla Slab', serif";
  }

}
