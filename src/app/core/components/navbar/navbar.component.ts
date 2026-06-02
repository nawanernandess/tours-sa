import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ScrollToService } from '../../../shared/services/scroll-to.service';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule],
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
