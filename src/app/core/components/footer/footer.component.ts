import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ScrollToPipe } from 'src/app/shared/pipes/scroll-to.pipe';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ScrollToPipe],
})
export class FooterComponent implements OnInit {
  envelope = faEnvelope;

  constructor(private _Router: Router, private _scrollToPipe: ScrollToPipe) {}

  ngOnInit() {}

  scrollTo(event: Event, sectionId: string): void {
    return this._scrollToPipe.transform(event, sectionId);
  }

  navigateToRegisterContact() {
    this._Router.navigateByUrl('contato');
  }
}
