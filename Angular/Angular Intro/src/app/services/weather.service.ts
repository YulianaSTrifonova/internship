import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeatherData } from '../pages/weather/weatherData.interface';

@Injectable({ providedIn: 'root' })
export class WeatherService {
    private _sofiaUrl =
        'https://api.openweathermap.org/data/2.5/weather?id=727011&APPID=406496398945921f8d8da27d8efcb655';

    constructor(public http: HttpClient) {}

    public getWeather(): Observable<IWeatherData> {
        return this.http.get<IWeatherData>(this._sofiaUrl);
    }
}
