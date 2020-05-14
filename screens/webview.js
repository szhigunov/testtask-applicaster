import React from 'react';
import {WebView} from '../components/webview';

export const WebViewScreen = ({route, navigation}) => {
  return <WebView navigation={navigation} href={route.params.data.href} />;
};
