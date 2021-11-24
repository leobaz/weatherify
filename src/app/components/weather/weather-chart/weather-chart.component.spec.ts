import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WeatherChartComponent } from './weather-chart.component';

describe('WeatherChartComponent', () => {
  let component: WeatherChartComponent;
  let fixture: ComponentFixture<WeatherChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
