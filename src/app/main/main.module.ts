import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainComponent} from "./main.component";
import {MainRoutingModule} from "./main-routing.module";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {NzModalCustomizeComponent} from "../nz-modal-customize/nz-modal-customize.component";
import {ChangePasswordComponent} from "../change-password/change-password.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [
    MainComponent,
    NzModalCustomizeComponent,
    ChangePasswordComponent
  ],
  entryComponents:[NzModalCustomizeComponent,ChangePasswordComponent]
})
export class MainModule { }
