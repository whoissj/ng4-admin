import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad{

  canLoad(route: Route): Observable<boolean> {
    return undefined;
  }

  constructor(private router: Router,private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let url: string = state.url;

    return this.authService.getAuth()
      .map(auth => !auth.hasError);
  }
}
