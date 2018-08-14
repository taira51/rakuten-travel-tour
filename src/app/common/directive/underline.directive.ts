import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective implements OnInit {

  constructor(private ElementRef: ElementRef) { }

  ngOnInit() {
    const element = this.ElementRef.nativeElement as HTMLElement;
    element.style.textDecoration = 'underline';
  }
}
