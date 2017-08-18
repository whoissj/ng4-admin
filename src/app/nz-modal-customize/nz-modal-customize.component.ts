import { Component, OnInit, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';

@Component({
  selector: 'app-nz-modal-customize',
  templateUrl: './nz-modal-customize.component.html',
  styleUrls: ['./nz-modal-customize.component.css']
})
export class NzModalCustomizeComponent implements OnInit {

  _name: string;
  @Input()
  set name(value: string){
    this._name = value;
  }

  constructor(private subject: NzModalSubject) {
    this.subject.on('onDestory', () => {
      console.log('destroy');
    });
  }

  emitDataOutside(e) {
    this.subject.next(1);
    // this.subject.destroy('onOk');//自定义的方法，在调用modal时可以引用
  }

  handleCancel(e) {
    this.subject.destroy('onCancel');
  }

  ngOnInit() {
  }

}
