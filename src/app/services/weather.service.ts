import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getCityWeather(name: string) {
    return this.httpClient.get(`${environment.api}weather?q=${name}&appid=${environment.apiKey}&units=metric`);
  }

  getCityForecast(name: string) {
    return this.httpClient.get(`${environment.api}forecast?q=${name}&appid=${environment.apiKey}&units=metric&cnt=4`);
  }
}
