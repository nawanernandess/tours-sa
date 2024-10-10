import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [SharedModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
