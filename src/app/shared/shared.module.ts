import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './components/card/card.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { DialogComponent } from './components/dialog/dialog.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AppRoutingModule } from '../app-routing.module';
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSnackBarModule,
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
    DialogComponent,
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
    DialogComponent,
  ],
})
export class SharedModule {}
