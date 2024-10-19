import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ModalComponent } from './contact/modal/modal.component';
import { ContentNavigationComponent } from './content-navigation/content-navigation.component';

import { register } from 'swiper/element/bundle';
register();

@NgModule({
  declarations: [
    ContentNavigationComponent,
    HomeComponent,
    ContactComponent,
    ModalComponent,
  ],
  imports: [FormsModule, ReactiveFormsModule, SharedModule],
  exports: [ContentNavigationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturesModule {}
