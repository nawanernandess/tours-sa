import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ScrollToService } from '../../../shared/services/scroll-to.service';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, AvatarComponent],
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
