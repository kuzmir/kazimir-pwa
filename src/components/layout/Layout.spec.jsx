// @flow

import * as React from 'react';
import {shallow} from 'enzyme';

import Layout from './Layout';

describe('<Layout />', () => {
  it ('renders', () => {
    expect(shallow(<Layout>asd</Layout>)).toHaveLength(1);
  });
});
