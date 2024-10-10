import { Component, OnInit } from '@angular/core';
import {
  faCar,
  faMap,
  faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  car = faCar;
  map = faMap;
  planeDerpature = faPlaneDeparture;

  constructor(private _Router: Router) {}

  ngOnInit() {}

  navigateToRegisterContact() {
    this._Router.navigateByUrl('contato');
  }
}
