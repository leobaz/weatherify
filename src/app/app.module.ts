import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { WeatherChartComponent } from './weather-chart/weather-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherDisplayComponent,
    WeatherChartComponent
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
