import { Component, OnInit, Input  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Observable } from 'rxjs-compat/Observable';
import { DataSource } from '@angular/cdk/collections';
import { WeatherService, Weather } from '../weather.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  temps : any;
  weathers : any;
  dataSource = new WeatherDataSource(this.weatherService);
  displayedColumns = ['temperature', 'date'];
  temp = new FormControl('');
  constructor(private weatherService : WeatherService) { 
    //this.addval = 0;
    this.temps = {
      average: 0, median : 0, max: 0, min: 0
    }

    this.weatherService.weathers.subscribe((w) => {
      this.calculateVals(w);
    });
  }

  calculateVals(_w : Weather[]) {
    var total = 0;
    var min = -999999;
    var max = 99999;
    var median = 0; var n =0;
    console.log("weather",_w);
    var v = [];



    for(let w in _w) {
      if(n==0) {
        min = _w[0].forecast.forecastday.day.avgtemp_c;
       max =  _w[0].forecast.forecastday.day.avgtemp_c;
      }
      var tw=_w[w];
      console.log("weather",tw);
      var tm = tw.forecast.forecastday.day.avgtemp_c;
        total+= tm;
        if(tm<min) min = tm;
        if(tm>max) max = tm;
        n++;
        v.push(tm);
    }

    this.temps.average = total/n;
    this.temps.min = min;
    this.temps.max = max;
    this.temps.median = this.median(v);


  }

  median(values : number[]) 
    {
     
      values.sort(function(a,b){
      return a-b;
    });
  
    if(values.length ===0) return 0;
  
    var half = Math.floor(values.length / 2);
  
    if (values.length % 2)
      return values[half];
    else
      return (values[half - 1] + values[half]) / 2.0;
  
  }


  ngOnInit() {
  }

  addTemp(addval) {
    console.log(addval.value);
      this.weatherService.addTemp(+addval.value)
  }

}

export class WeatherDataSource extends DataSource<any> {
  constructor(private weatherService: WeatherService) {
    super();
  }
  connect(): Observable<Weather[]> {
    this.weatherService.loadWeathers();
    return this.weatherService.weathers;
  }
  disconnect() {}
}
