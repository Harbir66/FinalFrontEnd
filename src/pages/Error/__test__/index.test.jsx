import React from 'react';
import { render } from '@testing-library/react';
import Error from '../index';

describe('Error Page', () => {
  it('should render correctly withour status code', () => {
    const { asFragment } = render(<Error />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render correctly with status code', () => {
    jest.mock('react-router-dom', () => ({
      useParams: () => ({
        errorCode: 404,
      }),
    }));
    const { asFragment } = render(<Error />);
    expect(asFragment()).toMatchSnapshot();
  });
});
