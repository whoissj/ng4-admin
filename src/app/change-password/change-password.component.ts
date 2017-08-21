import { Component, OnInit, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../core/auth.service";
import { NzModalService } from 'ng-zorro-antd';

@Component({
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  validateForm: FormGroup;
  statusMes:string = '提 交';
  isLoading:boolean = false;


  _username: string;
  @Input()
  set username(value: string){
    this._username = value;
  }

  constructor(private subject: NzModalSubject,
              private fb: FormBuilder,
              private authService: AuthService,
              private nzModalService: NzModalService) {
    this.validateForm = this.fb.group({
      oldpsd: [ '', [ Validators.required ] ],
      newpsd: [ '', [ Validators.required, Validators.minLength(4) ] ],
      reppsd: [ '', [ this.equalValidator ] ],
    });
    this.subject.on('onDestory', () => {
      console.log('destroy');
    });

  }
  equalValidator = (control: FormControl): any => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls[ 'newpsd' ].value) {
      return { confirm: true,error: true};
    }
  };

  handleSubmit(){
    this.isLoading = true;
    this.statusMes = '提交中...';
    this.authService.changePsd(this._username,this.validateForm.get('oldpsd').value,this.validateForm.get('newpsd').value)
      .subscribe(user => {
        console.log(user);
        this.isLoading = false;
        this.statusMes = '提交';
        this.nzModalService.success({
          title: '修 改 成 功',
          width:'300px',
          zIndex:1001
        });
        this.subject.destroy('onOk');
      },error =>{
        console.log(error);
        this.isLoading = false;
        this.statusMes = '提交';
        if(error.mes === 'wrong'){
          this.nzModalService.error({
            title: '密码错误，请确认密码',
            width:'300px',
            zIndex:1001
          });
        }else{
          this.nzModalService.error({
            title: '网络连接失败',
            width:'300px',
            zIndex:1001
          });
        }
      });
  }

  handleCancel(e) {
    this.subject.destroy('onCancel');
  }

  _submitForm(form){
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
    if(form.valid){
      this.handleSubmit();
    }
  }


  ngOnInit() {

  }

}
