import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleGenerationsModule } from './pages/simple-generations/simple-generations.module';
import { SimpleBiomesGenerationsModule } from './pages/simple-biomes-generations/simple-biomes-generations.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimpleGenerationsModule,
    SimpleBiomesGenerationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
