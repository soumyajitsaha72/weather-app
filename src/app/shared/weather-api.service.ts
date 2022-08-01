import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class WeatherApiService {
    private appId = 'a46d28bd6b77258dcf5d2516a62ffd50';
    locationWeatherData = {};

    constructor(private http: HttpClient) { }

    getLocationData(location: string) {
        return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + this.appId + "&units=metric");
    }

    LoadLocationData(lat: number, lon: number) {
        return this.http.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + this.appId + "&units=metric");
    }
}