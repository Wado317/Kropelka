import {ThemeProvider} from 'styled-components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React, {Component} from 'react';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import {colors} from './src/const/colors';
import Toast from 'react-native-toast-message';
import UserSessionService, {
  AuthState,
  UserSessionServiceConsumer,
} from './src/services/UserSessionService';
import FirebaseAuthService from './src/services/FirebaseAuthService';
import LoginStack from './src/navigation/LoginStack/LoginStack'
import UserStack from './src/navigation/UserStack/UserStack'
import ChangePasswordScreen from './src/screens/ChangePasswordScreen/ChangePasswordScreen'
import { NavigationContainer } from '@react-navigation/native';
// modal toast --

interface AppState {
  authState: AuthState;
}

class App
  extends Component<any, AppState>
  implements UserSessionServiceConsumer {
  constructor(props: any) {
    super(props);

    this.state = {
      authState: UserSessionService.shared.authState,
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
    this.setState({authState: UserSessionService.shared.authState});
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
        <SafeAreaProvider>
          <ThemeProvider theme={colors}>
            {this.renderNavigation()}
          </ThemeProvider>
          <Toast ref={(ref) => Toast.setRef(ref)} topOffset={50} />
        </SafeAreaProvider>
      </>
    );
  }
}

export default App;
