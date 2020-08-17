import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private homeService: HomeService) {

  }

  ngOnInit(): void {
    const weather = {
      city: 'London',
      countryCode: 'uk',
      appid: 'f7686d5151519aa153773553f15b529f',
    };


    this.homeService.getWeather(weather).subscribe(
      (weather) => {
        console.log('Weather Formated by Modal', weather);
      },
      (error: any) => {
        console.log(error);
      });
  }

}
