import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorPickerWrapperComponent } from './color-picker-wrapper/color-picker-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerWrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ColorPickerModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
