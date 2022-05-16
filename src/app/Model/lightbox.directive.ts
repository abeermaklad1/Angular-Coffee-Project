import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLightbox]'
})
export class LightboxDirective {
  @Input('appLightbox') lightBoxColor:string = 'red';
  lightBoxColorOut:string = 'gray';
  
  constructor(public elementRef:ElementRef) { 
    this.elementRef.nativeElement.style.border = `2px solid orange`
  }

  @HostListener("mouseenter") onMouseEnter(){
    this.elementRef.nativeElement.style.border = `2px solid ${this.lightBoxColor}`
    this.elementRef.nativeElement.src = "../../../assets/a2.jpg"

  }

  @HostListener("mouseout") onMouseOut(){
    this.elementRef.nativeElement.style.border = `2px solid ${this.lightBoxColorOut}`

  }

}
