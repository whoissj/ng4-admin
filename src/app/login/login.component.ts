import {Component, OnInit, Inject, OnDestroy} from '@angular/core';
import { AuthService } from '../core/auth.service';
import {Router} from "@angular/router";
import {Auth, Status} from "../domain/entries";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { NzModalService } from 'ng-zorro-antd';
import {Observable} from "rxjs/Observable";


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    // this.authService.getStatus.unsubscribe();
  }
  userName = '';
  password = "";
  auth: Auth;
  validateForm: FormGroup;
  status: Observable<Status>;
  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder,
              private nzModalService: NzModalService) {
    this.authService.changeStatus(false,'登 陆');
    this.status = this.authService.getStatus();
  }

  _submitForm(form) {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
    if(form.valid){
      this.login(form.value);
    }

  }

  login(user){
    this.authService.loginWithCredentials(user.userName,user.password)
      .subscribe(auth =>{
        if(!auth.hasError){
          localStorage.setItem('auth',JSON.stringify(auth));
          localStorage.setItem('userId',(auth.user.id).toString());
          this.router.navigate(['main']);
        } else {
          this.auth = Object.assign({}, auth);
          let that = this;
          let timer = null;
          if(timer){clearTimeout(timer);}
          timer = setTimeout(function () {
            auth.hasError = false;
            that.auth = Object.assign({}, auth);
            clearTimeout(timer);
          },2000)
        }
      },err=>{
        this.authService.changeStatus(false,'登  录');
        this.nzModalService.error({
          title: '登 录 失 败',
          content: '请检查网络',
          width:'250px'
        });
      });
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
  }

}
