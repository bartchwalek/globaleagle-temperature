import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject, BehaviorSubject, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Weather {

  location: {
    name: string,
    region:  string,
    country:  string,
    lat: number,
    lon: number,
    tz_id: string,
    localtime_epoch: number,
    localtime: string
  },
  forecast : {

    forecastday : {
      date: string,
      date_epoch: number,
      day: 
        {
          maxtemp_c: number,
          maxtemp_f: number,
          mintemp_c: number,
          mintemp_f: number,
          avgtemp_c: number,
          avgtemp_f: number,
        }
    }

  }
 
}

const NO_WEATHER = <Weather>{
  
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  /*
http://history.openweathermap.org/data/2.5/history/city?q={city ID},{country code}&type=hour&start={start}&end={end}
  */
 // apiURL : string = 'http://api.openweathermap.org/data/2.5/weather?'q=London,uk&APPID=b66f032e63b1457eefe819eff3fc8777
 //http://api.apixu.com/v1/history.json?key=9a43b33fd3474dfe9f8192731192002&q=montreal&dt=2019-02-19
 
  apiKey : string = 'c6551dfb070f4982928211232192002';
  apiURL : string = `http://api.apixu.com/v1/history.json?key=${this.apiKey}`;

  

  //{city ID},{country code}&type=hour&start={start}&end={end}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  private dataStore: {
    weathers : Weather[]
  };

  private w : Weather[];

  private _weather: BehaviorSubject<Weather> = new BehaviorSubject(NO_WEATHER);
  public readonly weather: Observable<Weather> = this._weather.asObservable();
  //&q=&dt=2015-01-01

      private _weathers: BehaviorSubject<Weather[]> = new BehaviorSubject([]);
      public readonly weathers: Observable<Weather[]> = this._weathers.asObservable();


  constructor(private http: HttpClient) { 
    this.dataStore = { weathers: [] };
  }

  givendates = ["2019-02-16", "2019-02-17", "2019-02-18", "2019-02-19"];

  public addTemp(val: number) {
const service = this;
    const newWeather = <Weather>({
      location: {
        name: "Montreal",
        region:  "QC",
        country:  "CANADA",
        lat: 0,
        lon: 0,
        tz_id: "",
        localtime_epoch: 0,
        localtime: ""
      },
      forecast : {
    
        forecastday : {
          date: "2019-02-20",
          date_epoch: 0,
          day: 
            {
              maxtemp_c: 0,
              maxtemp_f: 0,
              mintemp_c: 0,
              mintemp_f: 0,
              avgtemp_c: val,
              avgtemp_f: 0,
            }
        }
    
      }
    })
    console.log(newWeather);
    service._weather.next(newWeather);
    service.dataStore.weathers.push(newWeather);
                   service._weathers.next(Object.assign({}, service.dataStore).weathers);


  }

  public loadWeathers()  {
  const service = this;
 
  for(let d of this.givendates) {
    service.getWeather("Montreal", d).subscribe((w) => {

                  //service.dataStore.weathers.push(w);
                   service._weathers.next(Object.assign({}, service.dataStore).weathers);

    })
  }
   /* this.getWeather()
     
    this.weather.subscribe((w) => {
                    service.dataStore.weathers.push(w);
                   service._weathers.next(Object.assign({}, service.dataStore).weathers);
    });
*/



//console.log(service.w);
   //service._weathers.next(this.w);
  

  }

  public getWeather(city: string, date: string): Observable<Weather> {
    const service = this;
    return service.http.get<Weather>(`${service.apiURL}&q=${city}&dt=${date}`).pipe(
        map(w => {
          const newWeather = <Weather>({
            location: {
              name: w["location"]["name"],
              region:  w["location"]["region"],
              country:  w["location"]["country"],
              lat: w["location"]["lat"],
              lon: w["location"]["lon"],
              tz_id: w["location"]["tz_id"],
              localtime_epoch: w["location"]["localtime_epoch"],
              localtime:w["location"]["localtime"]
            },
            forecast : {
          
              forecastday : {
                date: w["forecast"]["forecastday"][0]["date"],
                date_epoch: w["forecast"]["forecastday"][0]["date_epoch"],
                day: 
                  {
                    maxtemp_c: w["forecast"]["forecastday"][0]["day"]["maxtemp_c"],
                    maxtemp_f: w["forecast"]["forecastday"][0]["day"]["maxtemp_f"],
                    mintemp_c: w["forecast"]["forecastday"][0]["day"]["mintemp_c"],
                    mintemp_f: w["forecast"]["forecastday"][0]["day"]["mintemp_f"],
                    avgtemp_c: w["forecast"]["forecastday"][0]["day"]["avgtemp_c"],
                    avgtemp_f: w["forecast"]["forecastday"][0]["day"]["avgtemp_f"],
                  }
              }
          
            }
          })
          console.log(newWeather);
          service._weather.next(newWeather);
         // this.w = [newWeather];
         service.dataStore.weathers.push(newWeather);
          return newWeather;
        }));

      }


}
