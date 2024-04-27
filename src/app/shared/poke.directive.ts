import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPokeDirective]',
})
export class PokeDirectivec implements OnInit {
  @Input('appPokeDirective') pokemonType!: string;
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.classList.add(this.pokemonType + '-type');
  }
}
