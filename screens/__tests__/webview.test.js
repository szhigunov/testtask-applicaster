/**
 * @format
 */

import 'react-native';
import React from 'react';
import {WebViewScreen} from '../webview';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('WebViewScreen renders correctly', () => {
  let root = renderer.create(
    <WebViewScreen
      route={{params: {data: {href: 'someurl'}}}}
      navigation={{goBack: jest.fn()}}
    />,
  );

  expect(root.toJSON()).toMatchSnapshot();
});
