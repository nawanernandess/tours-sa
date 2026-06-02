import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ScrollToService } from '../../../shared/services/scroll-to.service';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule, MatButtonModule, MatIconModule, MatListModule, AvatarComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private readonly router = inject(Router);
  private readonly scrollToService = inject(ScrollToService);

  readonly envelope = faEnvelope;

  scrollTo(event: Event, sectionId: string): void {
    this.scrollToService.scrollTo(event, sectionId);
  }

  navigateToRegisterContact(): void {
    this.router.navigateByUrl('contato');
  }
}
