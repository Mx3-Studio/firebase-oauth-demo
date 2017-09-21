import { Injectable } from '@angular/core';

// Import Observable
import { Observable } from 'rxjs';

// Import Firebase and AngularFire
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  public authInfo: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.authInfo = this.afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((user) => { console.log(user); });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => { console.log('logged out') });
  }

}
