import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getCityWeather(name: string) {
    return this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=280d0df558c4ce5b07c25c74d7778930&units=metric`
    );
  }

  getCityForecast(key: string) {
    let params = new HttpParams()
      .set("appid", "280d0df558c4ce5b07c25c74d7778930")
      .set("lang", "en-US")
      .set("units", "metric");
    return this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,hourly`,
      { params: params }
    );
  }
}
