import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './components/card/card.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { InputFormComponent } from './components/input-form/input-form.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSnackBarModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CardComponent,
    SwiperComponent,
    AvatarComponent,
    InputFormComponent,
  ],
  exports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CardComponent,
    SwiperComponent,
    AvatarComponent,
    InputFormComponent,
  ],
})
export class SharedModule {}
