import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../core/auth.service";
import { NzModalService } from 'ng-zorro-antd';
import {Auth} from "../domain/entries";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;
  username: string;
  password: string;
  auth: Auth;
  isLoading: boolean = false;
  statusMes: string = '注  册';

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthService,
              private nzModalService: NzModalService) {

  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required, Validators.minLength(3) ] ],
      password: [ null, [ Validators.required, Validators.minLength(4) ] ],
      remember: [ true ],
    });
  }

  _submitForm(form) {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
    if(form.valid){
      this.register(form.value);
    }
  }

  register(user){
    let that = this;
    this.isLoading = true;
    this.statusMes = '注  册  中';
    this.authService.register(user.userName,user.password)
      .subscribe(user => {
        this.isLoading = false;
        this.statusMes = '注  册';
        this.nzModalService.confirm({
          title  : '注册成功，是否立即登录？',
          onOk() {
            that.confirmLogin(user)
          },
          onCancel() {
          }
        })
      },err =>{
        this.isLoading = false;
        this.statusMes = '注  册';
        this.nzModalService.error({
          title: '用 户 已 存 在',
          content: '请重新注册',
          width:'250px'
        });
      })
  }

  confirmLogin(user){
    this.authService.loginWithCredentials(user.username,user.password)
      .subscribe(auth => {
        if (!auth.hasError) {
          localStorage.setItem('auth', JSON.stringify(auth));
          localStorage.setItem('userId', (auth.user.id).toString());
          this.router.navigate(['main']);
        }
      })
  }
}
