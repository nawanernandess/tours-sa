import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
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

@NgModule({ declarations: [
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
    ], imports: [BrowserModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        MatToolbarModule,
        MatDialogModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NgxMaskModule.forRoot(maskConfig)], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule {}
