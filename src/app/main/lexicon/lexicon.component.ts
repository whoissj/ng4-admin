import { Component, OnInit } from '@angular/core';
import { lexiconData } from '../../../data';
@Component({
  selector: 'app-lexicon',
  templateUrl: './lexicon.component.html',
  styleUrls: ['./lexicon.component.css']
})
export class LexiconComponent implements OnInit {
  data = lexiconData.data;
  constructor( ) { }

  ngOnInit() {
  }

  SortChange($e,key) {
    if($e == 'ascend') {
      this.data = [ ...this.data.sort((a,b) => {
        return a[key] - b[key];
      })]
    }else if($e === 'descend'){
      this.data = [ ...this.data.sort((a,b) => {
        return b[key] - a[key];
      })]
    }
  }

}
