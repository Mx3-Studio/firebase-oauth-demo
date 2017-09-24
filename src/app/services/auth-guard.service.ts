import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthenticationService) { }

  canActivate(): Observable<boolean> {
   return this.auth.authInfo
     .take(1)
     .map(authInfo => !!authInfo)
     .do(auth => !auth ? this.router.navigate(['/']) : true);
  }

}
