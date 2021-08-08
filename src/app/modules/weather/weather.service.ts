import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Location } from "../../models/location.model"
import { Weather } from "src/app/models/weather.model";
import { DailyForecasts } from "src/app/models/dailyForecasts.model";

@Injectable({
    providedIn: "root"
})
export class WeatherService {
    favorites: Location[]=[];
    defaultCity: string = "Tel Aviv";
    constructor(private http: HttpClient) { }

    // getDefaultLocation(): Observable<Location[]> {
    //     return this.http.get<Location[]>(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=5JRIQCRe8rVgc356CyDTbzrdk5tNwxFt&q=${this.defaultCity}`)
    // }

    getLocationByName(city: string): Observable<Location[]> {
        return this.http.get<Location[]>(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=5JRIQCRe8rVgc356CyDTbzrdk5tNwxFt&q=${city}`)
    }

    getCurrentWeather(key: string): Observable<Weather[]>{
        return this.http.get<Weather[]>(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=5JRIQCRe8rVgc356CyDTbzrdk5tNwxFt`)

    }

    get5DayDailyForecast(key: string): Observable<DailyForecasts>{
        return this.http.get<DailyForecasts>(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=5JRIQCRe8rVgc356CyDTbzrdk5tNwxFt`)

    }

}
