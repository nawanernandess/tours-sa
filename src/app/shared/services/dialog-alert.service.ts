import { inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlertComponent } from '../components/dialog-alert/dialog-alert.component';

import {
  faCheckCircle,
  faTimesCircle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

export enum DialogType {
  success = 'success',
  error = 'error',
}

@Injectable({
  providedIn: 'root',
})
export class DialogAlertService {
  private readonly dialogRef = inject(MatDialog);

  readonly icon = signal<IconDefinition | undefined>(undefined);
  readonly title = signal('');
  readonly description = signal('');
  readonly typeStyle = signal('');

  dialogOpen(type: DialogType, message: string): void {
    this.description.set(message);

    switch (type) {
      case DialogType.success:
        this.typeStyle.set(type);
        this.icon.set(faCheckCircle);
        this.title.set('Sucesso');
        break;
      case DialogType.error:
        this.typeStyle.set(type);
        this.icon.set(faTimesCircle);
        this.title.set('Erro');
        break;
    }

    const dialog = this.dialogRef.open(DialogAlertComponent);
    setTimeout(() => dialog.close(), 3000);
  }

  close(): void {
    this.dialogRef.closeAll();
  }
}
