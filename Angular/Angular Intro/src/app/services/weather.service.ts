import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WeatherService {
    private _sofiaUrl =
        'https://api.openweathermap.org/data/2.5/weather?id=727011&APPID=406496398945921f8d8da27d8efcb655';
}
