import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ContentNavigationComponent } from './features/content-navigation/content-navigation.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, ContentNavigationComponent, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly document = inject(DOCUMENT);

  readonly showBackToTop = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    const window = this.document.defaultView;
    this.showBackToTop.set((window?.scrollY ?? 0) > 100);
  }

  scrollToTop(): void {
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
