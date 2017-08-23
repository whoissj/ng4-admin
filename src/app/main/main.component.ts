import { Component, OnInit } from '@angular/core';
import { AuthService } from "../core/auth.service";
import { Auth } from "../domain/entries";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { NzModalService } from 'ng-zorro-antd';
import { ChangePasswordComponent } from "../modal/change-password/change-password.component";

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isCollapsed = false;
  auth: Auth;
  activatedUrl: string;
  constructor(private authService: AuthService,
              private router: Router,
              private nzModalService: NzModalService,
              private routeInfo: ActivatedRoute ) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.activatedUrl = e.url;
      }
    })
  }

  changePsd(username){
    const subscription  = this.nzModalService.open({
      title:false,
      content: ChangePasswordComponent,
      footer: false,
      width: '350px',
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

  doLogout(that) {
    that.authService.unAuth();
    that.auth = null;
    that.router.navigate(['login']);
  };

  ngOnInit() {
    this.authService.getAuth()
      .subscribe(auth => this.auth = Object.assign({},auth));
  }
  onClick(){
    window.scrollTo(0, 0);
  }
}
