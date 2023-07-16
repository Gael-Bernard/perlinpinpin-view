import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleGenerationsModule } from './pages/simple-generations/simple-generations.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimpleGenerationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
