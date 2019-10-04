import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Route, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable()
export class LoggedInGuard implements CanLoad {

  constructor(private loginService: LoginService) {}

  checkauthentication (path: string): boolean {
    const loggedIn = this.loginService.isloggedIn();
    if (!loggedIn) {
      this.loginService.handleLogin(`/${path}`)
    }
    return loggedIn;
  }

  canLoad(route: Route): boolean {
    return this.checkauthentication(route.path);
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    return this.checkauthentication(activatedRoute.routeConfig.path);
  }
}
