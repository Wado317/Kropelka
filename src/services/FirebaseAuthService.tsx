import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database'

export default class FirebaseAuthService {
  public static async signUpWithEmailAndPassword( email:string, password:string ) : Promise<any> {
    try {
      // const user = await auth().createUserWithEmailAndPassword( email, password )
      console.warn('lol');
      await database().ref('/users/patryk1').set({ name:'Patryk', surname:'Wadowski' })
      // console.warn(response);
      console.warn('lol1');

    } catch (error) {
      console.warn(error);
      return error;
    }
  }
}