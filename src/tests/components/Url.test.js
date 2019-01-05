import React from 'react';
import Url from '../../components/Url';
import { shallow } from 'enzyme';

test('should render Url correctly', () => {
  const wrapper = shallow(<Url url="http://test.com" />);

  expect(wrapper).toMatchSnapshot();
});
