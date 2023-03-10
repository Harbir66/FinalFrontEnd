import React from 'react';
import { render } from '@testing-library/react';
import PageNotFound from '../index';

describe('Not Found Page', () => {
  it('should render', () => {
    const { asFragment } = render(<PageNotFound />);
    expect(asFragment()).toMatchSnapshot();
  });
});
