import { Component, OnInit, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
    this.validateForm = this.fb.group({
      oldpsd: [ null, [ Validators.required ] ],
      newpsd: [ null, [ Validators.required ] ],
      reppsd: [ null, [ Validators.required ] ],
    });
    this.subject.on('onDestory', () => {
      console.log('destroy');
    });

  }
  equalValidator(control: FormControl): any {
    let psd: FormControl = this.validateForm.get('newpsd') as FormControl;
    let reppsd: FormControl = this.validateForm.get('reppsd') as FormControl;
    let valid: boolean = psd.value === reppsd.value;
    return valid? null:{equal: true}
  }



  handleSubmit(e){
    this.subject.next('修改成功');
  }

  handleCancel(e) {
    this.subject.destroy('onCancel');
  }

  _submitForm(form){
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
    console.log(form.value)
  }


  ngOnInit() {

  }

}
