import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, retry} from 'rxjs/operators';
import {Weather} from './weather.model';
import {environment} from '@env';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class HomeService {

  private apiUri = `${environment.API_ENDPOINT}`;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  public getWeather(weather): Observable<WeatherResponse> {
    // const uri = `${this.apiUri}/users?page=${page}`;

    const uri = `${this.apiUri}/weather?zip=${weather.zip},${weather.countryCode}&appid=${weather.appid}`;
    const token = localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    };

    return this.httpClient.get<WeatherResponse>(uri, {headers})
      .pipe(
        retry(1)
      )
      .pipe(map((res) => {
        console.log('API RESPONSE ', res);
        res.data = res.data.map(
          (data): Weather => new Weather().deserialize(data)
        );
        // res.pagination = new Pagination().deserialize(res.meta.pagination);
        return res;
      }));
  }
}

export interface WeatherResponse {
  data: Weather[];
  pagination: any;
  meta: any;
}
