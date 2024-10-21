import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faAddressBook,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <fa-icon
        *ngIf="icon"
        class="size-icon-in-content"
        [icon]="icon"
      ></fa-icon>

      <div class="app-card-body">
        <h3 class="title m-0">{{ title }}</h3>

        <p class="m-0 tam">{{ description }}</p>

        <div *ngIf="buttonTitle" class="content-alignment">
          <a
            class="btn-card content-alignment"
            (click)="actionEmitter.emit(true)"
            style="cursor: pointer"
            >{{ buttonTitle }}</a
          >
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() icon: IconDefinition = faAddressBook;

  @Input() title: string;

  @Input() description: string;

  @Input() buttonTitle: string;

  @Output() actionEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
