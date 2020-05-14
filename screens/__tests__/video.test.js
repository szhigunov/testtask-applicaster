/**
 * @format
 */

import 'react-native';
import React from 'react';
import {VideoScreen} from '../video';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('VideoScreen renders correctly', () => {
  let root = renderer.create(<VideoScreen route={{params: {data: {uri: 'someurl'}}}} />);
  expect(root.toJSON()).toMatchSnapshot();
});
