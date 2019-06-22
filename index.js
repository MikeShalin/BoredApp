/**
 * @format
 */

/** need to debug network **/
XMLHttpRequest = GLOBAL.originalXMLHttpRequest
  ? GLOBAL.originalXMLHttpRequest
  : GLOBAL.XMLHttpRequest;

import { AppRegistry } from 'react-native';
import { App } from './src/features/App/Component';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
