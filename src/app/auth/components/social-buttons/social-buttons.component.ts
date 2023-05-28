import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.scss'],
})
export class SocialButtonsComponent {
  @Output() public buttonClicked = new EventEmitter<void>();

  public onClick(): void {
    this.buttonClicked.emit();
  }
}
