import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

@Pipe({
  name: 'scrollTo',
})
export class ScrollToPipe implements PipeTransform {
  constructor(private _Router: Router) {}
  transform(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);

    if (element) {
      const offset = 72;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      this.smoothScrollTo(0, offsetPosition);

      window.history.pushState(null, '', `#${sectionId}`);
      return;
    } else {
      this._Router.navigateByUrl('');
    }
  }

  smoothScrollTo(endX: number, endY: number, duration?: number) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    const easeInOutQuart = (
      time: number,
      from: number,
      distance: number,
      duration: number
    ) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60);
  }
}
