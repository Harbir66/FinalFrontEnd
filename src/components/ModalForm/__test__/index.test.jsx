import { render } from '@testing-library/react';
import React from 'react';
import ModalForm from '..';

describe('ModalForm', () => {
  it('should render when not open', () => {
    const { asFragment } = render(<ModalForm />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render when open', () => {
    const { asFragment } = render(<ModalForm isOpen onClose={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
