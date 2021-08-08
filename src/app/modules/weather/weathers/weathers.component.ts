import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Location } from 'src/app/models/location.model';
import { Weather } from 'src/app/models/weather.model';
import { DailyForecasts } from 'src/app/models/dailyForecasts.model';

@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.css']
})
export class WeathersComponent implements OnInit {

  isToAdd: boolean = true;
  //namesDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  currentLocation?: Location;
  key!: string;
  currentWeather?: Weather;
  dailyForecast?: DailyForecasts;
  days?: object[];

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this._weatherService.getLocationByName(this._weatherService.defaultCity).subscribe(location => {
      this.currentLocation = location[0];
      this.key = this.currentLocation.Key;
      this._weatherService.getCurrentWeather(this.key).subscribe(w => {
        this.currentWeather = w[0];
        console.log(this.currentWeather);
      }, err => { console.log(err) })

      this._weatherService.get5DayDailyForecast(this.key).subscribe(arr => {
        this.dailyForecast = arr;
        this.days = arr.DailyForecasts
      }, err => { console.log(err) })
    }, err => { console.log(err) })
    if (this._weatherService.favorites.includes(this.currentLocation))
      this.isToAdd = false
  }


  SearchCity(name: string) {
    this._weatherService.getLocationByName(name).subscribe(location => {
      this.currentLocation = location[0];
      this.key = this.currentLocation.Key;
      this._weatherService.getCurrentWeather(this.key).subscribe(w => {
        this.currentWeather = w[0];
        this.isToAdd = true;
      }, err => { console.log(err) })

      this._weatherService.get5DayDailyForecast(this.key).subscribe(arr => {
        this.dailyForecast = arr;
        this.days = this.dailyForecast.DailyForecasts;
        this.days.forEach(d => console.log(d)
        )

      }, err => { console.log(err) })
    }, err => { console.log(err) })
  }

  addToFavorites() {
    this.isToAdd = false;
    console.log("before ", this._weatherService.favorites);
    console.log(this._weatherService.favorites.includes(this.currentLocation));
    console.log("!", this._weatherService.favorites.indexOf(this.currentLocation) == -1);

    if (this._weatherService.favorites.indexOf(this.currentLocation) == -1) {
      this._weatherService.favorites.push(this.currentLocation);
      console.log("after ", this._weatherService.favorites);
    }

  }
  removeFromFavorites() {
    this.isToAdd = true;
    var l = this._weatherService.favorites.indexOf(this.currentLocation);
    this._weatherService.favorites.splice(l, 1);
  }

}
