import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './site/content/content.component';
import { ReadRegistrationComponent } from './crud-components/read-registration/read-registration.component';

const routes: Routes = [
  {
    path: "",
    component: ContentComponent
  },{
    path: "lista",
    component: ReadRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
