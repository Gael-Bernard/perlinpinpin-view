import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorablePerlinMapComponent } from './pages/simple-generations/colorable-perlin-map/colorable-perlin-map.component';
import { SideviewPerlinMapComponent } from './pages/simple-generations/sideview-perlin-map/sideview-perlin-map.component';
import { SideviewRandomMapComponent } from './pages/simple-generations/sideview-random-map/sideview-random-map.component';
import { SideviewPerlin3MapComponent } from './pages/simple-generations/sideview-perlin3-map/sideview-perlin3-map.component';
import { SideviewSimpleBiomesComponent } from './pages/simple-biomes-generations/sideview-simple-biomes/sideview-simple-biomes.component';
import { PerlinContinentsMapComponent } from './pages/continent-generations/perlin-continents-map/perlin-continents-map.component';

const routes: Routes = [
  {
    path: "basic-perlin-examples",
    component: ColorablePerlinMapComponent,
  },
  {
    path: "sideview-perlin-example",
    component: SideviewPerlinMapComponent,
  },
  {
    path: "sideview-perlin3-example",
    component: SideviewPerlin3MapComponent,
  },
  {
    path: "sideview-random-examples",
    component: SideviewRandomMapComponent,
  },
  {
    path: "sideview-simple-biomes",
    component: SideviewSimpleBiomesComponent,
  },
  {
    path: "perlin-continents-map",
    component: PerlinContinentsMapComponent,
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
