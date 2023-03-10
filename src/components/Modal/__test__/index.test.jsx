import { render } from '@testing-library/react';
import React from 'react';
import Modal from '../index';

describe('Modal', () => {
  it('should render when not open', () => {
    const { asFragment } = render(<Modal />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render when open', () => {
    const { asFragment } = render(<Modal isOpen onClose={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
