import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onmouseover() {
    this.backgroundColor = this.hightColor;
  }
  @HostListener('mouseout') onmouseout() {
    this.backgroundColor = this.defaultColor;
  }

  // tslint:disable-next-line:member-ordering
  @HostBinding('style.backgroundColor') backgroundColor: String;

  // tslint:disable-next-line:member-ordering
  @Input() defaultColor: String = 'white';

  // tslint:disable-next-line:member-ordering
  @Input('appHighlight') hightColor: String = 'yellow';

  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
