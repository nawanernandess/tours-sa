import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { ScrollToPipe } from './pipes/scroll-to.pipe';

import { CardComponent } from './components/card/card.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { DialogAlertComponent } from './components/dialog-alert/dialog-alert.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  declarations: [
    CardComponent,
    SwiperComponent,
    AvatarComponent,
    DialogAlertComponent,
    ScrollToPipe,
  ],
  exports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgxMaskModule,
    AppRoutingModule,

    CardComponent,
    SwiperComponent,
    AvatarComponent,
    DialogAlertComponent,
  ],
})
export class SharedModule {}
