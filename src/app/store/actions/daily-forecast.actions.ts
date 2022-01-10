import { Action } from "@ngrx/store";
import { Weather } from "src/app/models/weather.model";

export const SET_DAILY_FORECAST = "[DAILY_FORECAST] Set";
export const RESET_DAILY_FORECAST = "[DAILY_FORECAST] Reset";

export class SetDailyForecast implements Action {
  readonly type = SET_DAILY_FORECAST;

  constructor(public payload: Weather) {}
}

export class ResetDailyForecast implements Action {
  readonly type = RESET_DAILY_FORECAST;
}

export type Actions = SetDailyForecast | ResetDailyForecast;
