import React from 'react';
import {WebView} from '../components/webview';

export const WebViewScreen = ({route, navigation}) => {
  return <WebView goBack={navigation.goBack} href={route.params.data.href} />;
};
