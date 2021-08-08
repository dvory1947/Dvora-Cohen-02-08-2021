import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeathersComponent } from './modules/weather/weathers/weathers.component';
import { FavoritesComponent } from './modules/weather/favorites/favorites.component';

const routes: Routes = [
  { path: "home", component: WeathersComponent },
  { path: "favorites", component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
