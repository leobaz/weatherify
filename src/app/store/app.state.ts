import { Weather } from "../models/weather.model";

export interface AppState {
  readonly dailyForecast: Weather;
}
