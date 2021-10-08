import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComposerModule } from './composer/composer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MatDialogModule, BrowserAnimationsModule, ComposerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
