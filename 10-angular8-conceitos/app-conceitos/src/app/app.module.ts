import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppExemplo1Component } from './components/app-exemplo1/app-exemplo1.component';

@NgModule({
  declarations: [
    AppComponent,
    AppExemplo1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
