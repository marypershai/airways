import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent {
  constructor(
    private dialogRef: MatDialogRef<ConfirmModalComponent>,
    private router: Router
  ) {}
  public onConfirm(): void {
    this.dialogRef.close();
    this.router.navigate(['']);
  }
}
