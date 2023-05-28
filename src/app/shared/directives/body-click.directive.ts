import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appBodyClick]',
})
export class BodyClickDirective {
  @Output() public bodyClicked = new EventEmitter<MouseEvent>();
  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  public bodyClickHandler(event: MouseEvent): void {
    const { target } = event;
    if (!target) {
      return;
    }

    const isClickOnHostElement = this.elementRef.nativeElement.contains(
      event.target
    );

    if (!isClickOnHostElement) {
      this.bodyClicked.emit(event);
    }
  }
}
