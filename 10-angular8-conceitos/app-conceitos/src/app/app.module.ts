import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppExemplo1Component } from './components/app-exemplo1/app-exemplo1.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { DataServiceComponent } from './components/data-service/data-service.component';

@NgModule({
  declarations: [
    AppComponent,
    AppExemplo1Component,
    PropertyBindingComponent,
    EventBindingComponent,
    DataServiceComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
