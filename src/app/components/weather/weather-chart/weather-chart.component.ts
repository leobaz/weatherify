import { Component, OnInit } from "@angular/core";
import * as CanvasJS from "../../../shared/canvasjs.min.js";

@Component({
  selector: "app-weather-chart",
  templateUrl: "./weather-chart.component.html",
  styleUrls: ["./weather-chart.component.scss"],
})
export class WeatherChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let chart = new CanvasJS.Chart("chartContainer", {
      exportEnabled: false,
      animationEnabled: true,
      backgroundColor: "transparent",
      axisX: {
        interval: 1,
        intervalType: "hour",
        valueFormatString: "hh TT",
        labelAngle: 0,
      },
      axisY: {
        gridColor: "none",
        tickColor: "none",
      },
      data: [
        {
          type: "stackedArea",
          indexLabel: "{y}°",
          xValueFormatString: "hh",
          toolTipContent: "{x} AM </br> <strong>Temperature: </strong> {y} °C",
          color: "#ffffff",
          dataPoints: [
            { x: new Date(Date.UTC(2012, parseInt("01", 8), 1, 1, 0)), y: 26 },
            { x: new Date(Date.UTC(2012, parseInt("01", 8), 1, 2, 0)), y: 27 },
            { x: new Date(Date.UTC(2012, parseInt("01", 8), 1, 3, 0)), y: 30 },
            { x: new Date(Date.UTC(2012, parseInt("01", 8), 1, 4, 0)), y: 33 },
            { x: new Date(Date.UTC(2012, parseInt("01", 8), 1, 5, 0)), y: 30 },
            { x: new Date(Date.UTC(2012, parseInt("01", 8), 1, 6, 0)), y: 27 },
          ],
        },
      ],
    });

    chart.render();
  }
}
