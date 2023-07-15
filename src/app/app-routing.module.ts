import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorablePerlinMapComponent } from './perlin-maps/colorable-perlin-map/colorable-perlin-map.component';

const routes: Routes = [
  {
    path: "basic-perlin-examples",
    component: ColorablePerlinMapComponent,
  },
  {
    path: "**",
    redirectTo: "basic-perlin-examples"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
