/**
 * @format
 */

import 'react-native';
import React from 'react';
import {SearchInput} from '../search-input';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('SearchInput renders correctly', () => {
  let root = renderer.create(<SearchInput onChangeText={jest.fn()} value="" />);
  expect(root.toJSON()).toMatchSnapshot();
});
