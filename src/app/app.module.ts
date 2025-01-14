import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TakeoperatorComponent } from './takeoperator/takeoperator.component';
import { TakelastComponent } from './takelast/takelast.component';

@NgModule({
  declarations: [
    AppComponent,
    TakeoperatorComponent,
    TakelastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
