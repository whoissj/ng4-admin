import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../core/auth.service";
import { NzModalService } from 'ng-zorro-antd';
import {Auth, Status} from "../domain/entries";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    // this.authService.statusSubject.unsubscribe();
  }

  validateForm: FormGroup;
  username: string;
  password: string;
  auth: Auth;
  status: Observable<Status>;
  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthService,
              private nzModalService: NzModalService) {
    this.authService.changeStatus(false,'注  册');
    this.status = this.authService.getStatus();
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
    this.authService.register(user.userName,user.password)
      .subscribe(user => {
        this.authService.changeStatus(false,'注  册');
        this.nzModalService.confirm({
          title  : '注册成功，是否立即登录？',
          onOk() {
            that.confirmLogin(user)
          },
          onCancel() {
          }
        })
      },err =>{
        this.authService.changeStatus(false,'注  册');
        this.nzModalService.error({
          title: err.mes,
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
