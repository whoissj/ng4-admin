import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { echartsData } from '../../../data'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  echartsIntance1;
  echartsIntance2;
  echartsIntance3;
  constructor(private router: Router) {
    setTimeout(() => {
      this.resizeChart();
    },100);
  }

  ngOnInit() {
  }
  showloading:boolean = echartsData.showloading;
  chartOption = echartsData.chartOption;
  Baroptions = echartsData.Baroptions;
  linkoption = echartsData.linkoption;

  onChartInit1(e){
    this.echartsIntance1 = e;
  }
  onChartInit2(e){
    this.echartsIntance2 = e;
  }
  onChartInit3(e){
    this.echartsIntance3 = e;
  }
  resizeChart() {
    if (this.echartsIntance1) {
      this.echartsIntance1.resize();
    }
    if (this.echartsIntance2) {
      this.echartsIntance2.resize();
    }
    if (this.echartsIntance3) {
      this.echartsIntance3.resize();
    }
  }

}
