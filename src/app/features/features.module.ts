import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';

import { register } from 'swiper/element/bundle';
import { SharedModule } from '../shared/shared.module';
register();

@NgModule({
  declarations: [HomeComponent, ContentComponent, ContactComponent],
  imports: [AppRoutingModule, FormsModule, SharedModule],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturesModule {}
