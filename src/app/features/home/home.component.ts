import { Component, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCar,
  faMap,
  faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '../../shared/components/card/card.component';
import { SwiperComponent } from '../../shared/components/swiper/swiper.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, CardComponent, SwiperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly router = inject(Router);

  readonly car = faCar;
  readonly map = faMap;
  readonly planeDerpature = faPlaneDeparture;

  readonly descriptionTransfer =
    'Reserve seu transfer com preços acessíveis, conforto e segurança. Serviço rápido, confiável e com atendimento personalizado para garantir sua melhor experiência de viagem.';

  readonly descriptionTours =
    'Explore os melhores destinos com nossos passeios exclusivos! Descubra paisagens deslumbrantes, cultura local e atrações únicas com toda a conveniência e segurança.';

  readonly lorem =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo asperiores reiciendis neque explicabo suscipit tempore! Voluptates minima nostrum ex perferendis necessitatibus veniam, enim deserunt facere placeat, illum quae, quam eveniet.';

  navigateToRegisterContact(): void {
    this.router.navigateByUrl('contato');
  }
}
