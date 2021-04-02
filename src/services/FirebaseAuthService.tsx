import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database'
import DateService from './DateService'

export default class FirebaseAuthService {
  public static async signUpWithEmailAndPassword( email:string, password:string ) : Promise<any> {
    try {
      const user = await auth().createUserWithEmailAndPassword( email, password )
      const timestamp = DateService.getCurrentTimestamp()
      await database().ref('users/').child(user.user.uid).set({ registerDate:timestamp })
    } catch (error) {
      console.warn(error);
      return error;
    }
  }
  public static async signInWithEmailAndPassword( email:string, password:string ) : Promise<any> {
    try {
      const user = await auth().signInWithEmailAndPassword( email, password )
    } catch (error) {
      console.warn(error);
      return error;
    }
  }
}