import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private _Router: Router) {}

  ngOnInit() {}

  navigateToRegisterContact() {
    this._Router.navigateByUrl('contato');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
