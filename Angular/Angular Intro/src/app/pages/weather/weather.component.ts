import { Component, OnInit } from '@angular/core';
import { WeatherService } from '@intro/app/services';
import { IWeatherData } from './weatherData.interface';

@Component({
    templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {
    public cityWeather: IWeatherData;

    constructor(private weatherService: WeatherService) {}

    public ngOnInit(): void {
        this.weatherService.getWeather().subscribe((data: IWeatherData) => {
            this.cityWeather = data;
            console.log(this.cityWeather);
        });
    }
}
