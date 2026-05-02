import { Component, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAddressBook,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <div class="card">
      @if (icon()) {
        <fa-icon
          class="size-icon-in-content"
          [icon]="icon()"
        ></fa-icon>
      }

      <div class="app-card-body">
        <h3 class="title m-0">{{ title() }}</h3>

        <p class="m-0 tam">{{ description() }}</p>

        @if (buttonTitle()) {
          <div class="content-alignment">
            <a
              class="btn-card content-alignment"
              (click)="actionEmitter.emit(true)"
              style="cursor: pointer"
              >{{ buttonTitle() }}</a
            >
          </div>
        }
      </div>
    </div>
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
