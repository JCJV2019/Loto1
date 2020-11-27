import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SerieNumericaComponent } from './serie-numerica/serie-numerica.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieNumericaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
