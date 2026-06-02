import { Component, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  faAddressBook,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  imports: [FontAwesomeModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card class="card" appearance="outlined">
      <mat-card-header>
        @if (icon()) {
          <fa-icon
            class="size-icon-in-content"
            [icon]="icon()"
          ></fa-icon>
        }
      </mat-card-header>

      <mat-card-content class="app-card-body">
        <h3 class="title m-0">{{ title() }}</h3>
        <p class="m-0 tam">{{ description() }}</p>
      </mat-card-content>

      @if (buttonTitle()) {
        <mat-card-actions>
          <button mat-flat-button color="primary" (click)="actionEmitter.emit(true)">
            {{ buttonTitle() }}
          </button>
        </mat-card-actions>
      }
    </mat-card>
  `,
  styleUrl: './card.component.css',
})
export class CardComponent {
  readonly icon = input<IconDefinition>(faAddressBook);
  readonly title = input('');
  readonly description = input('');
  readonly buttonTitle = input('');
  readonly actionEmitter = output<boolean>();
}
