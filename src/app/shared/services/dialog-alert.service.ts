import { Injectable } from '@angular/core';
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
  dialog: any;
  icon: IconDefinition | undefined = undefined;
  title: string = '';
  description: string = '';
  typeStyle: string = '';

  constructor(private dialogRef: MatDialog) {}

  dialogOpen(type: DialogType, mensage: string) {
    this.dialog = this.dialogRef.open(DialogAlertComponent);
    this.description = mensage;

    switch (type) {
      case DialogType.success:
        this.typeStyle = type;
        this.icon = faCheckCircle;
        this.title = 'Sucesso';
        break;
      case DialogType.error:
        this.typeStyle = type;
        this.icon = faTimesCircle;
        this.title = 'Erro';
        break;
    }
  }

  close() {
    setTimeout(() => {
      this.dialog.close();
    }, 3000);
  }
}
