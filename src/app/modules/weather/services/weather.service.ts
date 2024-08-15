import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Esse decorator serve para indicar que essa classe pode ser injetada em um componente
@Injectable({
  providedIn: 'root' //Deixando como root, todos os componentes têm acesso a esse serviço
})
export class WeatherService {
  private apikey = 'f861596d44a0b9bb7687d1923ecc106b';

  constructor(private http: HttpClient ) { }

  getWeatherDatas(cityName: String): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apikey}`, {})
  }
}
