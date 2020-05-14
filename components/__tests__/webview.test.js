/**
 * @format
 */

import 'react-native';
import React from 'react';
import {WebView} from '../webview';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('WebView renders correctly', () => {
  renderer.create(<WebView uri="someurl" />);
});
