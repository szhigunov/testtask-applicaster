/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {create, act} from 'react-test-renderer';

it('renders correctly', async () => {
  let root;
  act(() => {
    root = create(<App />);
  });

  expect(root.toJSON()).toMatchSnapshot();
});
