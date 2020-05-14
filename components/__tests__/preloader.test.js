/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Preloader} from '../preloader';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Preloader renders correctly', () => {
  let root = renderer.create(<Preloader title="sometitle" />);
  expect(root.toJSON()).toMatchSnapshot();
});
