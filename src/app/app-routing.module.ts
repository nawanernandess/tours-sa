import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, Scroll } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contato',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(
    private _Router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this._Router.events
      .pipe(filter((e) => e instanceof Scroll))
      .subscribe(() => {
        if (this._Router.url === '/contato') {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
