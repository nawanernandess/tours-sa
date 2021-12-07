import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './site/content/content.component';
import { ListComponent } from './site/list/list.component';

const routes: Routes = [
  {
    path: "",
    component: ContentComponent
  },{
    path: "lista",
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
