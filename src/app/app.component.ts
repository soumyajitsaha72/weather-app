import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from './shared/weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading = true;

  constructor(private weatherApiService: WeatherApiService) { }

  ngOnInit() {
    this.getPosition().then(pos => {
      this.weatherApiService.LoadLocationData(pos.lat, pos.lng)
        .subscribe(
          (locationWeatherData) => {
            this.weatherApiService.locationWeatherData = locationWeatherData;
            this.isLoading = false;
          }
        )
    });
  }

  //Get geological position of device.
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          resolve({ lng: 88.3639, lat: 22.5726 });
        });
    });
  }


}
