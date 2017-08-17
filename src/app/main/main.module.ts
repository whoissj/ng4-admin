import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main.component";
import {MainRoutingModule} from "./main-routing.module";
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
