import { render } from '@testing-library/react';
import React from 'react';
import Header from '../index';
import { mockHeading } from '../../../mocks';

describe('Header', () => {
  it('should render', () => {
    const { asFragment } = render(<Header heading={mockHeading} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
