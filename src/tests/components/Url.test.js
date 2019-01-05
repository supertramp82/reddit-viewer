import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Url from '../../components/Url';

test('should render Url correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Url url="http://www.test.com" />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
