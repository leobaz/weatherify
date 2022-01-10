export class Weather {
  name?: string;
  date?: number;
  temp?: {
    current: number;
    feels_like?: number;
    min: number;
    max: number;
    humidity: number;
    pressure: number;
  };
  weather?: {
    main: string;
    description: string;
    icon: string;
  };
  wind?: number;
  hourly?: Hourly[];
}

export class Hourly {
  date: number;
  temp: number;
}
