import { Component, OnInit } from "@angular/core";
import { Weather } from "src/app/models/weather.model";
import { WeatherService } from "src/app/services/weather.service";

@Component({
  selector: "app-weather-display",
  templateUrl: "./weather-display.component.html",
  styleUrls: ["./weather-display.component.scss"],
})
export class WeatherDisplayComponent implements OnInit {
  weatherDays: Weather[] = [];
  active: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getCityForecast("298781").subscribe((data) => {
      let i = 1;
      for (let day of data["daily"]) {
        if (i < 5) {
          if (day.weather[0].icon === "04d") {
            day.weather[0].icon = "03d";
          }
          if (day.weather[0].icon === "04n") {
            day.weather[0].icon = "03n";
          }
          this.weatherDays.push({
            date: +new Date(day.dt * 1000),
            temp: {
              current: day.temp.day,
              min: day.temp.min,
              max: day.temp.max,
              humidity: day.humidity,
              pressure: day.pressure,
            },
            weather: {
              main: day.weather[0].main,
              description: day.weather[0].description,
              icon: day.weather[0].icon,
            },
            wind: day.wind_speed,
          });
          i += 1;
        }
      }
      this.active = +new Date(data["daily"][0].dt * 1000);
    });
  }
}
