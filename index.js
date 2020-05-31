/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import {name as appName} from './app.json';
import Menu from './src/Menu'

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(Menu));
