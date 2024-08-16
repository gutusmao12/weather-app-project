import { WeatherDatas } from 'src/app/models/interface/weather.datas';
import { WeatherService } from './../../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy{ //Implementando o ciclo de vida do Angular para carregar o componente renderizado
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'São Paulo';
  weatherDatas!: WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) {} //Injetando o serviço dentro do component

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  //Método responsável por consumir o serviço
  getWeatherDatas(cityName: String): void {
    this.weatherService
    .getWeatherDatas(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas);
      },
      error: (error) => console.log(error),
    });
  }

  onSubmit(): void {
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void { //desinserção do método, após conclusão da chamada, para evitar vazamento de memória
      this.destroy$.next();
      this.destroy$.complete();
  }
}
