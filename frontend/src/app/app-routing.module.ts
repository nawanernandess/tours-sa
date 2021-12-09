import { DeleteRegistrationComponent } from './crud-components/delete-registration/delete-registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './site/content/content.component';
import { ReadRegistrationComponent } from './crud-components/read-registration/read-registration.component';
import { UpdateRegistrationComponent } from './crud-components/update-registration/update-registration.component';
import { ListaGuiaComponentComponent } from './lista-guia-component/lista-guia-component.component';

const routes: Routes = [
  {
    path: "",
    component: ContentComponent
  },{
    path: "lista",
    component: ReadRegistrationComponent
  },{
    path: "lista/update/:id",
    component: UpdateRegistrationComponent
  },{
    path: "lista/delete/:id",
    component: DeleteRegistrationComponent
  },{
    path: "lista2",
    component: ListaGuiaComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
