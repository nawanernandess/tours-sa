import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQuoteLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [FontAwesomeModule, AvatarComponent],
  template: `
    <div class="blockquote">
      <fa-icon class="quote-icon" [icon]="quote"></fa-icon>
      <p>{{ quoteText() }}</p>

      <div class="cite">
        <app-avatar size="profile" [avatar]="image()"></app-avatar>
        <div class="customer">
          <span class="customer-name">{{ name() }}</span>
          <span class="customer-role">{{ role() }}</span>
        </div>
      </div>
    </div>
  `,
  styleUrl: './swiper.component.css',
})
export class SwiperComponent {
  readonly image = input('');
  readonly name = input('');
  readonly role = input('');
  readonly quoteText = input('');

  readonly quote: IconDefinition = faQuoteLeft;
}
