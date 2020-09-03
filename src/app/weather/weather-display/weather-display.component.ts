import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {
  weatherDays: Weather[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getCityForecast('Pristina').subscribe((data) => {
      console.log(data);
      for (let day of data['list']) {
        console.log(day);
        this.weatherDays.push(
          {
            date: day.dt,
            temp: {
              feels_like: day.main.feels_like,
              current: day.main.temp,
              min: day.main.temp_min,
              max: day.main.temp_max,
              humidity: day.main.humidity,
              pressure: day.main.pressue
            },
            weather: {
              main: day.weather[0].main,
              description: day.weather[0].description,
              icon: day.weather[0].icon
            },
            wind: day.wind.speed
          }
        );
      }
    });
  }

}
