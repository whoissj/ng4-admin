import { Component, OnInit, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  validateForm: FormGroup;

  _name: string;
  @Input()
  set username(value: string){
    this._name = value;
  }

  constructor(private subject: NzModalSubject, private fb: FormBuilder) {
    this.subject.on('onDestory', () => {
      console.log('destroy');
    });
  }

  handleSubmit(e){
    this.subject.next('修改成功');
  }

  handleCancel(e) {
    this.subject.destroy('onCancel');
  }

  _submitForm(form){
    console.log(form.value)
  }


  ngOnInit() {
    this.validateForm = this.fb.group({
      oldpsd: [ null, [ Validators.required ] ],
      newpsd: [ null, [ Validators.required ] ],
      reppsd: [ null, [ Validators.required ] ],
    });
  }

}
