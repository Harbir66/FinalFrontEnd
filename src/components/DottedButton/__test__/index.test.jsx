import React from 'react';
import { render } from '@testing-library/react';
import DottedButton from '..';

describe('DottedButton', () => {
  it('should render correctly with large attribute ', () => {
    const { asFragment } = render(
      <DottedButton handleNew={jest.fn()} text="test" large />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render correctly without large attribute ', () => {
    const { asFragment } = render(
      <DottedButton handleNew={jest.fn()} text="test" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
