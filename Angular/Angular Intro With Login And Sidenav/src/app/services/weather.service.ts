/* eslint-disable import/no-relative-parent-imports */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getLocale } from '@intro/i18n/i18n';
import { IWeatherData } from '../pages/weather/weatherData.interface';

@Injectable({ providedIn: 'root' })
export class WeatherService {
    public constructor(private _http: HttpClient) {}

    public getWeather(cityId: number): Observable<IWeatherData> {
        const lang = getLocale().slice(0, 2);
        const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=406496398945921f8d8da27d8efcb655&units=metric&lang=${lang}`;

        return this._http.get<any>(url).pipe(
            map((response) => ({
                cityName: response.name,
                temperature: response.main.temp,
                humidity: response.main.humidity,
                weatherDescription: response.weather[0].description,
                sunrise: response.sys.sunrise * 1000,
                sunset: response.sys.sunset * 1000,
            })),
        );
    }
}
