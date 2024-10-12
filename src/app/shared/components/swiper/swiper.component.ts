import { Component, OnInit } from '@angular/core';
import { faQuoteLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-swiper',
  template: `
    <div class="blockquote">
      <fa-icon [icon]="quote"></fa-icon>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo asperiores
        reiciendis neque explicabo suscipit tempore! Voluptates minima nostrum
        ex perferendis necessitatibus veniam, enim deserunt facere placeat,
        illum quae, quam eveniet.
      </p>

      <div class="cite">
        <img src="###" alt="Foto cliente" />
        <div class="customer">
          <span>Nome do cliente</span>
          <span>Função do cliente</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./swiper.component.css'],
})
export class SwiperComponent implements OnInit {
  quote: IconDefinition = faQuoteLeft;
  constructor() {}

  ngOnInit(): void {}
}
