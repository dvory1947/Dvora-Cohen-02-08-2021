import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location.model';
import { Weather } from 'src/app/models/weather.model';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private _weatherService: WeatherService, private router: Router) { }
  favorites: Location[]
  currentWeathers: Weather[]=[];


  ngOnInit(): void {
    this.favorites = this._weatherService.favorites;
    this.favorites.map(f => {
      this._weatherService.getCurrentWeather(f.Key).subscribe(w => {
        this.currentWeathers.push(w[0]);
      }, err => { console.log(err) })
    })
  }
  getWeather(name) {
    this._weatherService.defaultCity = name;
    this.router.navigate(['home']);
  }
}
