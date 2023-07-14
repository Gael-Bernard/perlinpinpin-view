import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridVectorsMapComponent } from './perlin-maps/grid-vectors-map/grid-vectors-map.component';

const routes: Routes = [
  {
    path: "**",
    component: GridVectorsMapComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
