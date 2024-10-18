import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ContentNavigationComponent } from './content-navigation/content-navigation.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { register } from 'swiper/element/bundle';
import { ModalComponent } from './contact/modal/modal.component';
register();

@NgModule({
  declarations: [ContentNavigationComponent, HomeComponent, ContactComponent, ModalComponent],
  imports: [AppRoutingModule, FormsModule, ReactiveFormsModule, SharedModule],
  exports: [ContentNavigationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturesModule {}
