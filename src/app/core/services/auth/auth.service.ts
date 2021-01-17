import { User } from './../../models/backend/user/index';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import {
  switchMap,
  take,
  tap,
  share,
  mergeMap,
  takeUntil,
} from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = afAuth.authState.pipe(
      mergeMap((firebaseUser) => {
        if (firebaseUser) {
          return this.afs.doc<User>(`Users/${firebaseUser.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }),
      share()
    );
  }

  getCurrentUser() {
    return this.user$.pipe();
  }

  async emailLogin(email: string, password: string) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      return error.code;
    }
  }

  async emailSignup(email: string, password: string) {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      return error.code;
    }
  }

  async providerLogin(provider) {
    try {
      const firebaseUser = await this.afAuth.signInWithPopup(provider);
      const obUser: User = {
        firstName: firebaseUser.user.displayName,
        email: firebaseUser.user.email,
        uid: firebaseUser.user.uid,
      };
      await this.updateUserData(obUser);
      return obUser;
    } catch (error) {
      console.log('providerLogin', { error });
      return error.code ? error.code : error.message;
    }
  }

  async updateUserData(data: User) {
    try {
      const userRef = this.afs.doc(`Users/${data.uid}`);
      const doesExist: boolean = await this.checkIfRefExists(userRef);
      if (!doesExist) {
        userRef.set(data); // Creates the document for the first time user on the first login.
      } else {
        userRef.update(data); // Updates the user if the action is requested.
      }
      return 'success';
    } catch (error) {
      console.log('user Update Error', error);
      return Promise.reject('fail');
    }
  }

  async checkIfRefExists(ref: AngularFirestoreDocument) {
    const snap = await ref.get().pipe(take(1)).toPromise();
    return snap.exists ? true : false;
  }

  resetPassword(email: string) {
    this.afAuth.sendPasswordResetEmail(email);
  }

  async logout() {
    await this.afAuth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }
}
