import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorablePerlinMapComponent } from './perlin-maps/colorable-perlin-map/colorable-perlin-map.component';
import { SideviewPerlinMapComponent } from './perlin-maps/sideview-perlin-map/sideview-perlin-map.component';
import { SideviewRandomMapComponent } from './perlin-maps/sideview-random-map/sideview-random-map.component';

const routes: Routes = [
  {
    path: "basic-perlin-examples",
    component: ColorablePerlinMapComponent,
  },
  {
    path: "sideview-perlin-examples",
    component: SideviewPerlinMapComponent,
  },
  {
    path: "sideview-random-examples",
    component: SideviewRandomMapComponent,
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
