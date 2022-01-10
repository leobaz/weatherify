import { Weather } from "src/app/models/weather.model";
import * as DailyForecastActions from "../actions/daily-forecast.actions";

const initialState: Weather = {
  name: "",
  date: null,
  temp: {
    current: null,
    feels_like: null,
    min: null,
    max: null,
    humidity: null,
    pressure: null,
  },
  weather: {
    main: "",
    description: "",
    icon: "",
  },
  wind: null,
};

export function dailyForecastReducer(
  state: Weather = initialState,
  action: DailyForecastActions.Actions
) {
  switch (action.type) {
    case DailyForecastActions.SET_DAILY_FORECAST:
      return { ...state, ...action.payload };
    case DailyForecastActions.RESET_DAILY_FORECAST:
      return { ...initialState };
    default:
      return state;
  }
}
