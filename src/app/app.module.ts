import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SidebarModule } from "ng-sidebar";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { DetailsComponent } from "./components/weather/details/details.component";
import { WeatherChartComponent } from "./components/weather/weather-chart/weather-chart.component";
import { WeatherDisplayComponent } from "./components/weather/weather-display/weather-display.component";
import { WeatherComponent } from "./components/weather/weather.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherDisplayComponent,
    WeatherChartComponent,
    WeatherComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
