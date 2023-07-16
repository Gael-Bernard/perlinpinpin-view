import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorablePerlinMapComponent } from './pages/simple-generations/colorable-perlin-map/colorable-perlin-map.component';
import { SideviewPerlinMapComponent } from './pages/simple-generations/sideview-perlin-map/sideview-perlin-map.component';
import { SideviewRandomMapComponent } from './pages/simple-generations/sideview-random-map/sideview-random-map.component';

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
