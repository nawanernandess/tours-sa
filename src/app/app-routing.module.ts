import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './site/content/content.component';
import { ListaGuiaComponent } from './site/lista-guia-component/lista-guia.component';
import { CadastroGuiaComponent } from './site/cadastro-guia-component/cadastro-guia.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
  },
  {
    path: 'lista',
    component: ListaGuiaComponent,
  },
  {
    path: 'contato',
    component: CadastroGuiaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
