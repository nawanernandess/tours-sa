import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './site/content/content.component';
import { ContactComponent } from './site/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
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
export class AppRoutingModule {}
