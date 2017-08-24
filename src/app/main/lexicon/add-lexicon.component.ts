import {Component, EventEmitter, OnInit} from '@angular/core';
import {FileUploader, ParsedResponseHeaders} from 'ng2-file-upload';

@Component({
  selector: 'app-add-lexicon',
  templateUrl: './add-lexicon.component.html',
  styleUrls: ['./add-lexicon.component.css']
})
export class AddLexiconComponent implements OnInit {

  fileArr = [];
  isUploading: boolean = false;
  statusMes: string = '上 传';

  uploader:FileUploader = new FileUploader({
    url: "http://www.download.com:80/uploadFile",
    method: "POST",
    itemAlias: "uploadedfile"
  });
  constructor() {

  }

  ngOnInit() {
  }

  onFileSelected(){
    this.fileArr = this.uploader.queue;
  }
  clearItem(i){
    this.fileArr.splice(i,1);
  }
  clearAll(){
    this.uploader.clearQueue();
  }
  uploadAll(){
    if(this.uploader.queue&&this.uploader.queue.length>0) {
      this.isUploading = true;
      this.statusMes = '上 传 中';
      this.uploader.uploadAll();
      // this.uploader.onProgressAll = (progress: any): any => {
      //   console.log(progress);
      // };
      this.uploader.onErrorItem = (response: any, status: any, headers: any): any =>{
        console.log(response);
        if(this.uploader.queue[this.uploader.queue.length-1].isUploaded){
          this.isUploading = false;
          this.statusMes = '上 传';
        }
      };
    }
  }

}
