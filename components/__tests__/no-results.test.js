/**
 * @format
 */

import 'react-native';
import React from 'react';
import {NoResults} from '../no-results';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('NoResults renders correctly', () => {
  let root = renderer.create(<NoResults />);
  expect(root.toJSON()).toMatchSnapshot();
});
