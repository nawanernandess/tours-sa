import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { DialogAlertService } from '../../services/dialog-alert.service';

@Component({
  selector: 'app-dialog',
  template: `
    <div class="modal-info">
      <fa-icon
        [ngClass]="{
          success: typeStyle == 'success',
          error: typeStyle == 'error'
        }"
        [icon]="icon"
      ></fa-icon>
      <div class="header-description">
        <h1>{{ title }}</h1>
        <span class="description">{{ description }}</span>
      </div>
    </div>
  `,
  styleUrls: ['./dialog-alert.component.css'],
})
export class DialogAlertComponent implements OnInit {
  icon?: IconDefinition;
  title: string;
  description: string;
  typeStyle: string;

  constructor(private dialogService: DialogAlertService) {}

  ngOnInit(): void {
    this.icon = this.dialogService.icon;
    this.title = this.dialogService.title;
    this.description = this.dialogService.description;
    this.typeStyle = this.dialogService.typeStyle;
  }
}
