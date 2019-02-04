/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
* @lint-ignore-every XPLATJSCOPYRIGHT1
*/

import React, {Component} from 'react';
import {NavigatorIOS, Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import CommentBox from './src/components/CommentBox';
import CommentForm from './src/containers/CommentForm';
import rootReducer from './src/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

const RootStack = createStackNavigator(
  {
  Home: {screen: CommentBox},
  Add: {screen: CommentForm}
  },
  {
    initialRouteName: 'Home'
  }
  );

  const AppContainer = createAppContainer(RootStack);



  export default class App extends Component {
      render() {
        return (
          <Provider store={store}>
          <AppContainer />
          </Provider>
          );
        }
      }
