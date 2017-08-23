import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { userData } from '../../../data';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  ageSort = userData.ageSort;
  data = userData.data;

  ageSortChange($event) {
    if ($event === 'ascend') {
      this.data = [ ...this.data.sort((a, b) => {
        return a.age - b.age;
      }) ];
    } else if ($event === 'descend') {
      this.data = [ ...this.data.sort((a, b) => {
        return b.age - a.age;
      }) ];
    }
  }

}
