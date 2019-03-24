import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onmouseover() {
    // this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseout') onmouseout() {
    // this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  // tslint:disable-next-line:member-ordering
  @HostBinding('style.backgroundColor') backgroundColor: String;

  constructor(
    // private _elementRef: ElementRef,
    private _renderer: Renderer) { }

}
