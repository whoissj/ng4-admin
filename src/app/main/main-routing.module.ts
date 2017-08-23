import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./home/home.component";
import {LexiconComponent} from "./lexicon/lexicon.component";
import {AddLexiconComponent} from "./lexicon/add-lexicon.component";

const routes: Routes =  [
  {
    path:'main',
    component: MainComponent,
    children:[
      {
        path:'home',
        component:HomeComponent,
        pathMatch: 'full'
      },
      {
        path:'user',
        component:UserComponent,
        pathMatch: 'full'
      },
      {
        path:'lexicon/check',
        component:LexiconComponent,
        pathMatch: 'full'
      },
      {
        path:'lexicon/add',
        component:AddLexiconComponent,
        pathMatch: 'full'
      }
    ]
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class MainRoutingModule { }
