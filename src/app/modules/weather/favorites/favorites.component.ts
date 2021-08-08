import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location.model';
import { Weather } from 'src/app/models/weather.model';
import { WeatherService } from '../weather.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }
  favorites: Location[]
  currentWeathers?: Weather[];


  ngOnInit(): void {
    this.favorites = this._weatherService.favorites;
    this.favorites.forEach(f => {
      let i =0
      this._weatherService.getCurrentWeather(f.Key).subscribe(w => {
        this.currentWeathers[i] = w[0];
        i++;
        console.log("currentWeathers:" ,this.currentWeathers);
      }, err => { console.log(err) })
    })
  }
getWeather(name){

}
}
