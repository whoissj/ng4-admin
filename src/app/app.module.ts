import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth.service';
import {TodoService} from './todo/todo.service';

import {TodoModule} from './todo/todo.module';
import {MainModule} from "./main/main.module";
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    TodoModule,
    MainModule,
    CoreModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [ AuthService, TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
