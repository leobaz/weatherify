import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherDisplayComponent } from './weather/weather-display/weather-display.component';
import { WeatherChartComponent } from './weather/weather-chart/weather-chart.component';
import { WeatherComponent } from './weather/weather.component';
import { DetailsComponent } from './weather/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherDisplayComponent,
    WeatherChartComponent,
    WeatherComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
