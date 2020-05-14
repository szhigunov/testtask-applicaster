/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from './screens/home';
import {VideoScreen} from './screens/video';
import {WebViewScreen} from './screens/webview';

import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Feed'}}
          />
          <Stack.Screen
            name="Video"
            component={VideoScreen}
            options={({route}) => ({title: route.params.name})}
          />
          <Stack.Screen
            name="WebView"
            component={WebViewScreen}
            options={({route}) => ({title: route.params.name})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
