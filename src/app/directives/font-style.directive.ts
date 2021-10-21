import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appFontStyle]'
})
export class FontStyleDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.fontFamily = "'Zilla Slab', serif";
  }

}
