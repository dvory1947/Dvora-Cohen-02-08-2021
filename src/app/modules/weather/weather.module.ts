import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"
import { WeathersComponent } from "./weathers/weathers.component";
import { FavoritesComponent } from "./favorites/favorites.component";
@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [WeathersComponent, FavoritesComponent],
    exports: [WeathersComponent, FavoritesComponent]

})
export class WeaterModule {

}