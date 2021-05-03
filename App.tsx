import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { Component, createContext } from 'react';
import { StatusBar } from 'react-native';
import { colors } from './src/const/colors';
import Toast from 'react-native-toast-message';
import UserSessionService, {
  AuthState,
  ProfileModel,
  UserSessionServiceConsumer,
} from './src/services/UserSessionService';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import LoginStack from './src/navigation/LoginStack/LoginStack'
import UserStack from './src/navigation/UserStack/UserStack'


/* ----- AppContext ----- */
export interface AppContextState {
  firebaseUser: undefined | any;
  profile: undefined | any;
}

const AppContextInitialProps: AppContextState = {
  firebaseUser: undefined,
  profile: undefined,
};

export const AppContext = React.createContext<AppContextState>({
  ...AppContextInitialProps,
});

/* ----- AppState ----- */
interface AppState {
  authState: AuthState;
  appContext: AppContextState;
}

/* ----- Class Component ----- */
class App
  extends Component<any, AppState>
  implements UserSessionServiceConsumer {
  constructor(props: any) {
    super(props);

    this.state = {
      authState: UserSessionService.shared.authState,
      appContext: { ...AppContextInitialProps },
    };
  }

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true);
    UserSessionService.shared.addConsumer(this);
  }

  componentWillUnmount() {
    UserSessionService.shared.removeConsumer(this);
  }

  /* ----- UserSessinServiceConsumer Methods ----- */
  onAuthStateChange() {
    this.setState({ authState: UserSessionService.shared.authState });
  }

  onProfileChange(
    profile: ProfileModel | undefined,
    firebase_auth_user: FirebaseAuthTypes.User | undefined,
  ) {
    console.warn(
      `profile: ${JSON.stringify(
        profile,
      )} \nfirebase_auth_user: ${JSON.stringify(firebase_auth_user)}`,
    );
    this.setState({
      appContext: {
        ...this.state.appContext,
        profile: profile,
      },
    });
  }

  /*----- Rendering  ----- */
  renderNavigation = (): JSX.Element => {
    switch (this.state.authState) {
      case 'logged':
        return (
          <UserStack route={{}} />
        );
      case 'not_logged':
        // case 'pending':
        return (
          <LoginStack />
        );
    }
  };

  render() {
    return (
      <>
        <AppContext.Provider value={this.state.appContext}>
          <SafeAreaProvider>
            <ThemeProvider theme={colors}>
              {this.renderNavigation()}
            </ThemeProvider>
            <Toast ref={(ref) => Toast.setRef(ref)} topOffset={50} />
          </SafeAreaProvider>
        </AppContext.Provider>
      </>
    );
  }
}

export default App;
