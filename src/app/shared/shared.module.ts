import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSnackBarModule,
    MatToolbarModule,
  ],
  exports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
})
export class SharedModule {}
