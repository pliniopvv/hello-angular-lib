import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloLibModule } from '@pvv/hello-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HelloLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
