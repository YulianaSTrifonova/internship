import { Component, OnInit } from '@angular/core';
import { WeatherService } from '@intro/app/services/weather.service';
import { IWeatherData } from './weatherData.interface';

@Component({
    templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {
    public cityWeather: IWeatherData;
    public selectedCityId: number = 727011;
    public cities = [
        { id: 727011, name: 'Sofia, BG' },
        { id: 728193, name: 'Plovdiv, BG' },
        { id: 731549, name: 'Gabrovo, BG' },
        { id: 726848, name: 'Stara Zagora, BG' },
    ];

    public constructor(private _weatherService: WeatherService) {}

    public ngOnInit(): void {
        this.fetchWeather();
    }

    public onCityChange(): void {
        this.fetchWeather();
    }

    private fetchWeather(): void {
        this._weatherService
            .getWeather(this.selectedCityId)
            .subscribe((data: IWeatherData) => (this.cityWeather = data));
    }
}
