import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private WeatherSearvice: WeatherService){

  }
  
  cityName: string ='Kolkata';
  weatherData?: WeatherData;

  defaultCityNAme =""

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.defaultCityNAme = this.cityName;
    this.cityName= "";

  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.defaultCityNAme = this.cityName;
    this.cityName= "";
    
  }

  private getWeatherData(cityName:string){
    this.WeatherSearvice.getWeatherData(cityName)
    
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }
  
}
