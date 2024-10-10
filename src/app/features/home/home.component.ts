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

  constructor(private _Router: Router) {}

  ngOnInit() {}

  navigateToRegisterContact() {
    this._Router.navigateByUrl('contato');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
