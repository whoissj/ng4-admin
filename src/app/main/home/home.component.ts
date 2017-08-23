import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { echartsData } from '../../../data'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  showloading:boolean = echartsData.showloading;
  chartOption = echartsData.chartOption;
  Baroptions = echartsData.Baroptions;
  linkoption = echartsData.linkoption;
  datamapvalue = echartsData.datamapvalue;
  mapoption = echartsData.mapoption;
}
