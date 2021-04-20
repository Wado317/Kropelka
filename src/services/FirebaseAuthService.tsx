import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import ChangePasswordScreen from '../screens/ChangePasswordScreen/ChangePasswordScreen';
import DateService from './DateService';
import Toast from 'react-native-toast-message';

export default class FirebaseAuthService {
  public static async signUpWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<any> {
    try {
      const user = await auth().createUserWithEmailAndPassword(email, password);
      const timestamp = DateService.getCurrentTimestamp();
      await database()
        .ref('users/')
        .child(user.user.uid)
        .set({registerDate: timestamp});
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

  public static async changePassword(
    newPassword: string,
    oldPassword: string,
  ) {
    const user = auth().currentUser;
    const cred = auth.EmailAuthProvider.credential(
      user.email,
      oldPassword,
    );
    user
      .reauthenticateWithCredential(cred)
      .then(() => {
        user
          .updatePassword(newPassword)
          .catch((error) => {
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

