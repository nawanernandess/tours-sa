import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToPipe } from 'src/app/shared/pipes/scroll-to.pipe';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ScrollToPipe],
})
export class NavbarComponent implements OnInit {
  constructor(private _Router: Router, private _scrollToPipe: ScrollToPipe) {}

  ngOnInit() {}

  scrollTo(event: Event, sectionId: string): void {
    return this._scrollToPipe.transform(event, sectionId);
  }

  navigateToRegisterContact() {
    this._Router.navigateByUrl('contato');
  }
}
