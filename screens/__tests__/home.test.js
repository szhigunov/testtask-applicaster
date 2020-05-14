/**
 * @format
 */

import 'react-native';
import React from 'react';
import {HomeScreen} from '../home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('HomeScreen renders correctly', () => {
  renderer.create(<HomeScreen navigation={{navigate: jest.fn()}} />);
});
