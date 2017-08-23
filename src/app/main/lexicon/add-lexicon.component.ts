import {Component, EventEmitter, OnInit} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-add-lexicon',
  templateUrl: './add-lexicon.component.html',
  styleUrls: ['./add-lexicon.component.css']
})
export class AddLexiconComponent implements OnInit {

  uploader:FileUploader = new FileUploader({
    url: "http://www.download.com:80/uploadFile",
    method: "POST",
    itemAlias: "uploadedfile"
  });
  selectTrigger = new EventEmitter<boolean>();

  onFileSelected(){
    console.log(123);
  }
  onSelectTrigger(){
    console.log(123111);
    this.selectTrigger.emit(true);
  }
  constructor() { }

  ngOnInit() {
  }


}
