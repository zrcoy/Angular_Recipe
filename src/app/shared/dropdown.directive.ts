import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpened: boolean = false;

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpened = !this.isOpened;
    // if (this.isOpened) {
    //   this.elementRef.nativeElement.className = 'btn-group open';
    // } else {
    //   this.elementRef.nativeElement.className = 'btn-group';
    // }
  }

  // constructor(private elementRef: ElementRef) {}
}
