import { Component, OnInit } from "@angular/core";
import { Weather } from "../../models/weather.model";
import { SidebarService } from "../../services/sidebar.service";
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  currentCity: Weather;
  constructor(
    private sidebarService: SidebarService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.weatherService.getCityWeather("Pristina").subscribe((data) => {
      this.currentCity = {
        name: `${data["name"]}, ${data["sys"]["country"]}`,
        temp: {
          current: data["main"]["temp"],
          feels_like: data["main"]["feels_like"],
          min: data["main"]["temp_min"],
          max: data["main"]["temp_max"],
          humidity: data["main"]["humidity"],
          pressure: data["main"]["pressure"],
        },
        weather: {
          main: data["weather"][0]["main"],
          description: data["weather"][0]["description"],
          icon: data["weather"][0]["icon"],
        },
        wind: data["wind"]["speed"],
      };
    });
  }

  toggleSidebar() {
    this.sidebarService.ontoggleSidebar();
  }
}
