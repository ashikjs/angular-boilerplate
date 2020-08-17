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
      zip: '94040',
      countryCode: 'us',
      appid: '439d4b804bc8187953eb36d2a8c26a02',
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
