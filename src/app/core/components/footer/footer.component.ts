import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  envelope = faEnvelope;

  constructor(private _Router: Router) {}

  ngOnInit() {}

  navigateToRegisterContact() {
    this._Router.navigateByUrl('contato');
  }
}
