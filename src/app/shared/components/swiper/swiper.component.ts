import { Component, Input, OnInit } from '@angular/core';
import { faQuoteLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-swiper',
  template: `
    <div class="blockquote">
      <fa-icon class="quote-icon" [icon]="quote"></fa-icon>
      <p>{{ quoteText }}</p>

      <div class="cite">
        <img [src]="image" alt="Foto" />
        <div class="customer">
          <span class="customer-name">{{ name }}</span>
          <span class="customer-role">{{ role }}</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./swiper.component.css'],
})
export class SwiperComponent implements OnInit {
  @Input() image: string;

  @Input() name: string;

  @Input() role: string;

  @Input() quoteText: string;

  quote: IconDefinition = faQuoteLeft;

  constructor() {}

  ngOnInit(): void {}
}
