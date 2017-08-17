import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../core/auth.service';
import {Router} from "@angular/router";
import {Auth} from "../domain/entries";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = '';
  password = "";
  auth: Auth;
  validateForm: FormGroup;
  constructor(private authService: AuthService,private router: Router,private fb: FormBuilder) {

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
          this.router.navigate(['todo']);
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
