import { AppRegistry } from 'react-native';
import App from './App';
import { VueNativeBase } from "native-base";
import Vue from "vue-native-core";

Vue.use(VueNativeBase);
AppRegistry.registerComponent('cardExample', () => App);
