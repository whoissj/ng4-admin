import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/auth.service";
import {Auth} from "../domain/entries";
import {Router} from "@angular/router";
import { NzModalService } from 'ng-zorro-antd';
import { NzModalCustomizeComponent } from '../nz-modal-customize/nz-modal-customize.component';
import {ChangePasswordComponent} from "../change-password/change-password.component";

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isCollapsed = false;
  auth: Auth;
  number: number = 0;
  constructor(private authService: AuthService,private router: Router,private nzModalService: NzModalService) {

  }

  changePsd(username){
    const subscription  = this.nzModalService.open({
      title:false,
      content: ChangePasswordComponent,
      footer: false,
      componentParams: {
        username: username
      },
      onOk() {
        console.log('ok clicked')
      },
      onCancel() {
        console.log('Click cancel');
      },
    });
    subscription.subscribe(res => {
      console.log(res);
      if(typeof res === 'number'){
        this.number += res;
      }
    })
  }

  logout(){
    let that = this;
    const modal = this.nzModalService.open({
      title   : '提示',
      content : '确定退出登录吗？',
      closable: false,
      onOk() {
        console.log('ok');
        that.doLogout(that);
      },
      onCancel() {
        console.log('cacel');
      }
    })
  }

  modalTest(){
    const subscription  = this.nzModalService.open({
      title:'提示',
      content: NzModalCustomizeComponent,
      footer: false,
      componentParams: {
        name: "input names"
      },
      onOk() {
        console.log('ok clicked')
      },
      onCancel() {
        console.log('Click cancel');
      },
    });
    subscription.subscribe(res => {
      console.log(res);
      if(typeof res === 'number'){
        this.number += res;
      }
    })
  }


  doLogout(that) {
    that.authService.unAuth();
    that.auth = null;
    that.router.navigate(['login']);
  };

  ngOnInit() {
    this.authService.getAuth()
      .subscribe(auth => this.auth = Object.assign({},auth));
  }

}
