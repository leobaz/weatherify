import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getCityWeather(name: string) {
    return this.httpClient.get(`api/weather?q=${name}&appid=${environment.apiKey}&units=metric`);
  }

  getCityForecast(key: string) {
    let params = new HttpParams()
      .set('apiKey', environment.apiKey)
      .set('language', 'en-US')
      .set('details', 'false')
      .set('metric', 'true');
    return this.httpClient.get(`api/${key}`, {params: params});
  }
}
