import { Component } from '@angular/core';
import { IWeatherData } from './weatherData.interface';

@Component({
    templateUrl: './weather.component.html',
})
export class WeatherComponent {
    public cityWeather: IWeatherData | undefined;
}
