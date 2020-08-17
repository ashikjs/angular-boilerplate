import {Deserializable} from '@app/deserializ/deserializable.model';

export class Weather implements Deserializable {
  public id: string;
  public weatherMain: string;
  public weatherDescription: string;
  public base: string;
  public temp: string;
  public wind: any;

  deserialize(data: any): this {
    this.id = data.id;
    this.weatherMain = data.weather.main;
    this.weatherDescription = data.weather.description;
    this.base = data.base;
    this.temp = data.main.temp;
    this.wind = data.wind;
    return this;
  }

  serialize(data: any) {
    Object.assign(this, data);

    return this;
  }
}
