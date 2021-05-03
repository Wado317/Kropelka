import React from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type AuthState = 'pending' | 'logged' | 'not_logged';

export interface UserSessionServiceConsumer {
  onAuthStateChange?();
}

class UserSessionService {
  private static _instance: UserSessionService;
  private _authState: AuthState = 'pending';

  /* ------------------ Consumer distribution ----------------- */
  private consumers: UserSessionServiceConsumer[] = [];

  addConsumer(consumer: UserSessionServiceConsumer) {
    this.consumers.push(consumer);
  }

  removeConsumer(consumer: UserSessionServiceConsumer) {
    const index = this.consumers.indexOf(consumer, 0);
    if (index > -1) this.consumers.splice(index, 1);
  }

  private onAuthStateChange = (authState: AuthState) => {
    this._authState = authState;

    for (const consumer of this.consumers) {
      if (consumer.onAuthStateChange != undefined) {
        consumer.onAuthStateChange();
      }
    }
  };

  /* ------------------ Lifecycle ----------------- */
  private constructor() {
    this.observeUserSession();
  }

  public static get shared(): UserSessionService {
    return this._instance || (this._instance = new this());
  }

  /* ------------------ Public methods ----------------- */

  public get authState(): AuthState {
    return this._authState;
  }

  /* ---------------- Private methods ---------------- */
  private async observeUserSession() {
    auth().onAuthStateChanged((user: FirebaseAuthTypes.User) => {
      console.warn(user);
      if (user == undefined) {
        this.onAuthStateChange('not_logged');
        console.warn(this.authState);
        return;
      }

      //  TODO: Fetch user info
      this.onAuthStateChange('logged');
      console.warn(this.authState);
    });
  }
}

export default UserSessionService;
