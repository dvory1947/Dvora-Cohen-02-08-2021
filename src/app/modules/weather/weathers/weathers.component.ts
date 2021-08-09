import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Location } from 'src/app/models/location.model';
import { Weather } from 'src/app/models/weather.model';
import { DailyForecasts } from 'src/app/models/dailyForecasts.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.css']
})
export class WeathersComponent implements OnInit {

  isToAdd: boolean = true;
  cityName: string;
  currentLocation?: Location;
  key!: string;
  currentWeather?: Weather;
  dailyForecast?: DailyForecasts;
  subscription: Subscription;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {

    this._weatherService.getLocationByName(this._weatherService.defaultCity).subscribe(location => {
      this.currentLocation = location[0];
      this.key = this.currentLocation.Key;
      this._weatherService.getCurrentWeather(this.key).subscribe(w => {
        this.currentWeather = w[0];
      }, err => { console.log(err) })

      this._weatherService.get5DayDailyForecast(this.key).subscribe(arr => {
        this.dailyForecast = arr;
        this.dailyForecast.DailyForecasts.map(d => d.Date = new Date(d.Date))
      }, err => { console.log(err) })
    }, err => { console.log(err) })
    if (this._weatherService.favorites.includes(this.currentLocation))
      this.isToAdd = false
  }


  SearchCity(name: string) {
    this._weatherService.getLocationByName(name).subscribe(location => {
          if (!location[0]) {
        alert("Sorry your input does not exist😢");
          }
      this.currentLocation = location[0];
      this.key = this.currentLocation.Key;
      this._weatherService.getCurrentWeather(this.key).subscribe(w => {
        this.currentWeather = w[0];
        this.isToAdd = true;
      }, err => { console.log(err) })

      this._weatherService.get5DayDailyForecast(this.key).subscribe(arr => {
        this.dailyForecast = arr;
        this.dailyForecast.DailyForecasts.map(d => d.Date = new Date(d.Date));
      }, err => { console.log(err) })
    }, err => { console.log(err) })
  }

  addToFavorites() {
    this.isToAdd = false;
    if (this._weatherService.favorites.indexOf(this.currentLocation) == -1) {
      this._weatherService.favorites.push(this.currentLocation);
    }
  }
  
  removeFromFavorites() {
    this.isToAdd = true;
    var l = this._weatherService.favorites.indexOf(this.currentLocation);
    this._weatherService.favorites.splice(l, 1);
  }
}
