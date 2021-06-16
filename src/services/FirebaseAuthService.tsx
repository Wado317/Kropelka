import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import DateService from './DateService';
import Toast from 'react-native-toast-message';

export interface ApiUserModel {
  additionalData: {name: string; gender: string};
  data: {donatedBeforeRegistration: number};
}

export default class FirebaseAuthService {
  public static async signUpWithEmailAndPassword(
    email: string,
    password: string,
    userModel: ApiUserModel,
    //czy na tym urzadzeniu byla juz ta apka uzywana, ciocia renia pierwsze uruchaianie i zapoznanie z apka
  ): Promise<any> {
    try {
      const user = await auth().createUserWithEmailAndPassword(email, password);
      const timestamp = DateService.getCurrentTimestamp();
      await database()
        .ref('users/')
        .child(user.user.uid)
        .set({...userModel, registerDate: timestamp});
    } catch (error) {
      console.warn(error);
      return error;
    }
  }
  public static async signInWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<any> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const user = await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.warn(error);
      return error;
    }
  }

  public static async signOut() {
    try {
      await auth().signOut();
    } catch (error) {
      return error;
    }
  }

  public static async forgotPassword(email: string): Promise<any> {
    try {
      await auth().sendPasswordResetEmail(email);
    } catch (error) {
      console.warn(error);
      Toast.show({
        type: 'error',
        text1: 'Ups!',
        text2: 'Coś poszło nie tak, spróbuj ponownie!',
        topOffset: 50,
      });
      return error;
    }
    Toast.show({
      type: 'success',
      text1: 'Brawo!',
      text2: 'Wysłalismy do Ciebie maila ze zmianą hasła.',
      topOffset: 50,
    });
  }

  public static async changePassword(newPassword: string, oldPassword: string) {
    const user = auth().currentUser;
    const cred = auth.EmailAuthProvider.credential(user.email, oldPassword);
    user
      .reauthenticateWithCredential(cred)
      .then(() => {
        user.updatePassword(newPassword).catch((error) => {
          console.warn(error);
          Toast.show({
            type: 'error',
            text1: 'Ups!',
            text2: 'Coś poszło nie tak, spróbuj ponownie!',
            topOffset: 50,
          });
        });
        Toast.show({
          type: 'success',
          text1: 'Brawo!',
          text2: 'Twoje hasło zostało zmienione!',
          topOffset: 50,
        });
      })
      .catch((error) => {
        console.warn(error);
        Toast.show({
          type: 'error',
          text1: 'Ups!',
          text2: 'Coś poszło nie tak, spróbuj ponownie!',
          topOffset: 50,
        });
      });
  }
}
