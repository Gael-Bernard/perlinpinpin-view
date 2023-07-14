import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerlinMapsModule } from './perlin-maps/perlin-maps.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerlinMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
