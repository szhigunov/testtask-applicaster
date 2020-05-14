/**
 * @format
 */

import 'react-native';
import React from 'react';
import {VideoView} from '../videoview';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('VideoView renders correctly', () => {
  let root = renderer.create(<VideoView uri="someurl" />);
  expect(root.toJSON()).toMatchSnapshot();
});
