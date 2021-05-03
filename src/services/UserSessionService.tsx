import React from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


export type AuthState = 'pending' | 'logged' | 'not_logged';

export interface ProfileModel {
  registerDate: number;
  additionalData: {name: string; surname: string} | undefined;
}

export interface UserSessionServiceConsumer {
  onAuthStateChange(authState: AuthState);
  onProfileChange(
    profile: ProfileModel | undefined,
    firebase_auth_user: FirebaseAuthTypes.User | undefined,
  );
}

class UserSessionService {
  private static _instance: UserSessionService;
  private _firebase_auth_user: FirebaseAuthTypes.User | undefined;
  private _user_profile: ProfileModel | undefined;
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
        consumer.onAuthStateChange(this._authState);
      }
    }
  };

  private onUserProfileUpdate = (userProfile: ProfileModel | undefined) => {
    this._user_profile = userProfile;

    for (const consumer of this.consumers) {
      if (consumer.onProfileChange != undefined) {
        consumer.onProfileChange(this._user_profile, this._firebase_auth_user);
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
      if (user == undefined) {
        this._firebase_auth_user?.uid &&
          this.stop_observeUserData(this._firebase_auth_user.uid);
        this._firebase_auth_user = undefined;
        this.onAuthStateChange('not_logged');
        this.onUserProfileUpdate(undefined);
        return;
      }

      this._firebase_auth_user = user;
      this.start_observeUserData(user.uid);
      this.onAuthStateChange('logged');
    });
  }

  private async start_observeUserData(userId: string) {
    return database()
      .ref('users/')
      .child(userId)
      .on('value', (data) => {
        const json = data.toJSON();

        this.onUserProfileUpdate(json as ProfileModel);
      });
  }

  private async stop_observeUserData(userId: string) {
    return database().ref('users/').child(userId).off();
  }
}

export default UserSessionService;
