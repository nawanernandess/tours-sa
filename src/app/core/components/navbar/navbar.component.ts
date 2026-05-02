import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToService } from '../../../shared/services/scroll-to.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly router = inject(Router);
  private readonly scrollToService = inject(ScrollToService);

  scrollTo(event: Event, sectionId: string): void {
    this.scrollToService.scrollTo(event, sectionId);
  }

  navigateToRegisterContact(): void {
    this.router.navigateByUrl('contato');
  }
}
