import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  public openDialog(
    dialogComponent: ComponentType<unknown>
  ): Observable<unknown> {
    const dialogRef = this.dialog.open(dialogComponent, {
      maxHeight: '100vh',
      restoreFocus: false,
    });

    return dialogRef.afterClosed();
  }
}
