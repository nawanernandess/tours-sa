import { Component, OnInit } from '@angular/core';
import {
  faCar,
  faMap,
  faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  car = faCar;
  map = faMap;
  planeDerpature = faPlaneDeparture;

  descriptionTransfer: string =
    'Reserve seu transfer com preços acessíveis, conforto e segurança. Serviço rápido, confiável e com atendimento personalizado para garantir sua melhor experiência de viagem.';

  descriptionTours: string =
    'Explore os melhores destinos com nossos passeios exclusivos! Descubra paisagens deslumbrantes, cultura local e atrações únicas com toda a conveniência e segurança.';

  constructor(private _Router: Router) {}

  ngOnInit() {}

  navigateToRegisterContact() {
    this._Router.navigateByUrl('contato');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
