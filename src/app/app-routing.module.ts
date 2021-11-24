import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WeatherComponent } from "./components/weather/weather.component";

const routes: Routes = [{ path: "", component: WeatherComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
