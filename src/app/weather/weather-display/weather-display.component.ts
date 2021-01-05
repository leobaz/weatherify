import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {
  weatherDays: Weather[] = [];
  flick: any;

  constructor(private weatherService: WeatherService, private el: ElementRef) { }

  ngOnInit(): void {
    this.weatherService.getCityForecast('298781').subscribe((data) => {
      console.log(data);
      // for (let day of data['list']) {
      //   console.log(day);
      //   if(day.weather[0].icon === '04d') {
      //     day.weather[0].icon = '03d';
      //   }
      //   if(day.weather[0].icon === '04n') {
      //     day.weather[0].icon = '03n';
      //   }
      //   this.weatherDays.push(
      //     {
      //       date: day.dt_txt,
      //       temp: {
      //         feels_like: day.main.feels_like,
      //         current: day.main.temp,
      //         min: day.main.temp_min,
      //         max: day.main.temp_max,
      //         humidity: day.main.humidity,
      //         pressure: day.main.pressue
      //       },
      //       weather: {
      //         main: day.weather[0].main,
      //         description: day.weather[0].description,
      //         icon: day.weather[0].icon
      //       },
      //       wind: day.wind.speed
      //     }
      //   );
      // }
    });
  }

}
