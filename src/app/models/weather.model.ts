export class Weather {
    public name: string;
    public temp: {
        current: number;
        feels_like: number;
        min: number;
        max: number;
        humidity: number;
        pressure: number;
    };
    public weather: {
        main: string;
        description: string;
        icon: string;
    };
    public wind: number;

    constructor(name: string, tempCurr: number, tempFL: number, tempMin: number, tempMax: number, tempHum: number, tempPress: number, weatherMain: string, weatherDesc: string, weatherIcon: string, wind: number){
        this.name = name;
        this.temp = {
            current: tempCurr,
            feels_like: tempFL,
            min: tempMin,
            max: tempMax,
            humidity: tempHum,
            pressure: tempPress
        };
        this.weather = {
            main: weatherMain,
            description: weatherDesc,
            icon: weatherIcon
        };
        this.wind = wind;
    }

}