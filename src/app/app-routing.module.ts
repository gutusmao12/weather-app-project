import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherHomeComponent } from './modules/weather/page/weather-home/weather-home.component';

const routes: Routes = [
  {
    path: '', //Quando o caminho for vazio (ao inicializar a aplicação)
    redirectTo: 'weather', //Será redirecionado para a rota weather
    pathMatch: 'full'
  },
  {
    path: 'weather', //Rota weather
    component: WeatherHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
