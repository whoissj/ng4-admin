import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from "./main.component";
import { MainRoutingModule } from "./main-routing.module";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ChangePasswordComponent } from "../modal/change-password/change-password.component";
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AngularEchartsModule } from 'ngx-echarts';
import { LexiconComponent } from './lexicon/lexicon.component';
import { AddLexiconComponent } from './lexicon/add-lexicon.component';
import { FileUploadModule } from 'ng2-file-upload';
import {ImgPipePipe} from "../core/img-pipe.pipe";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    NgZorroAntdModule.forRoot(),
    AngularEchartsModule,
    FileUploadModule
  ],
  declarations: [
    MainComponent,
    ChangePasswordComponent,
    UserComponent,
    HomeComponent,
    LexiconComponent,
    AddLexiconComponent,
    ImgPipePipe
  ],
  providers:[ ],
  entryComponents:[ChangePasswordComponent]
})
export class MainModule { }
