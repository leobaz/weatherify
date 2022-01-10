import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { dailyForecastReducer } from "./reducers/daily-forecast.reducer";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      dailyForecast: dailyForecastReducer,
    }),
  ],
})
export class AppStoreModule {}
