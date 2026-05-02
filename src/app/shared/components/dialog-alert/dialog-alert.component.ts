import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogAlertService } from '../../services/dialog-alert.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [NgClass, FontAwesomeModule],
  template: `
    <div class="modal-info">
      @if (dialogService.icon()) {
        <fa-icon
          [ngClass]="{
            success: dialogService.typeStyle() === 'success',
            error: dialogService.typeStyle() === 'error'
          }"
          [icon]="dialogService.icon()!"
        ></fa-icon>
      }
      <div class="header-description">
        <h1>{{ dialogService.title() }}</h1>
        <span class="description">{{ dialogService.description() }}</span>
      </div>
    </div>
  `,
  styleUrl: './dialog-alert.component.css',
})
export class DialogAlertComponent {
  protected readonly dialogService = inject(DialogAlertService);
}
