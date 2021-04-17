/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import UserSessinService from './src/services/UserSessionService';

UserSessinService.shared;

AppRegistry.registerComponent(appName, () => App);
