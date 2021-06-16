/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import UserSessionService from './src/services/UserSessionService';

UserSessionService.shared;

AppRegistry.registerComponent(appName, () => App);
