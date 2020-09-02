import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../models/weather.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentCity: Weather = new Weather('', null, null, null, null, null, null, '', '', 'transparent', null);
  constructor(private sidebarService: SidebarService, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getCityWeather('Amsterdam').subscribe((data) => {
      console.log(data);
      this.currentCity = {
        name: `${data['name']}, ${data['sys']['country']}`,
        temp: {
          current: data['main']['temp'],
          feels_like: data['main']['feels_like'],
          min: data['main']['temp_min'],
          max: data['main']['temp_max'],
          humidity: data['main']['humidity'],
          pressure: data['main']['pressure']
        },
        weather: {
          main: data['weather'][0]['main'],
          description: data['weather'][0]['description'],
          icon: data['weather'][0]['icon']
        },
        wind: data['wind']['speed']
      };
    });
  }

  toggleSidebar() {
    this.sidebarService.ontoggleSidebar();
  }

}
