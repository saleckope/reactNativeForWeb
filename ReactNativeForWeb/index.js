import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('ReactNativeForWeb', () => App);

if (window.document) {
    AppRegistry.runApplication("ReactNativeForWeb", {
        initialProps: {},
        rootTag: document.getElementById("react-root")
    });
}