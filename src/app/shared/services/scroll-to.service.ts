import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollToService {
  private readonly router = inject(Router);

  scrollTo(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);

    if (element) {
      const offset = 72;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      this.smoothScrollTo(0, offsetPosition);
      window.history.pushState(null, '', `#${sectionId}`);
    } else {
      this.router.navigateByUrl('');
    }
  }

  private smoothScrollTo(endX: number, endY: number, duration = 400): void {
    const startX = window.scrollX;
    const startY = window.scrollY;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = Date.now();

    const easeInOutQuart = (
      time: number,
      from: number,
      distance: number,
      dur: number
    ): number => {
      const t = time / (dur / 2);
      if (t < 1) return (distance / 2) * t * t * t * t + from;
      return (-distance / 2) * ((t - 2) * (t - 2) * (t - 2) * (t - 2) - 2) + from;
    };

    const timer = setInterval(() => {
      const time = Date.now() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60);
  }
}
