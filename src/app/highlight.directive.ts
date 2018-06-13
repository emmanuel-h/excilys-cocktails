import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('class')
  elementClass = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.elementClass = 'color_green';
  }

  @HostListener('click') onMouseClick() {
    this.elementClass = 'font_color_black';
  }
}
