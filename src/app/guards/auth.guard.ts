import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private navController: NavController
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise(async (resolve) => {
      this.authService.authState().subscribe(async user => {
        if (user) {
          if (next.data.ignore) {
            await this.navController.navigateRoot('/tabs/home', { animated: true });
          }
          this.hideSplash();
          resolve(true);
        } else {
          if (next.data.ignore) {
            resolve(true);
          } else {
            resolve(false);
            await this.navController.navigateRoot('/login', { animated: true });
          }
          this.hideSplash();
        }
      });
    });
  }

  hideSplash() {
    if (document.readyState == 'complete') {
      
    } else {
      document.addEventListener('readystatechange', async (event: any) => {
        if (event.target.readyState === "complete") {
          
        }
      });
    }
  }

}
