import { WeatherDatas } from 'src/app/models/interface/weather.datas';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit{ //Implementando o ciclo de vida do Angular para carregar o componente renderizado
  initialCityName = 'São Paulo';
  weatherDatas!: WeatherDatas;

  constructor(private weatherService: WeatherService) {} //Injetando o serviço dentro do component

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  //Método responsável por consumir o serviço
  getWeatherDatas(cityName: String): void {
    this.weatherService.getWeatherDatas(cityName)
    .subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.log(error),
    });
  }
}
