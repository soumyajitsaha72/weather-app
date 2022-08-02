import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../shared/weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  locationData = {};
  currentDate = Date.now();

  searchText = "";
  onSearch(input: string) {
    this.weatherApiService.getLocationData(input)
      .subscribe(
        (res) => {
          this.locationData = res;
        }
      )
  }

  constructor(private weatherApiService: WeatherApiService) { }

  ngOnInit() {
    this.locationData = this.weatherApiService.locationWeatherData;
  }

}
