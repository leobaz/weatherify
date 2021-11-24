import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WeatherDisplayComponent } from './weather-display.component';

describe('WeatherDisplayComponent', () => {
  let component: WeatherDisplayComponent;
  let fixture: ComponentFixture<WeatherDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
