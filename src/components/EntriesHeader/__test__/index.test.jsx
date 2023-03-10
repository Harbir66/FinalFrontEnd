import React from 'react';
import { render } from '@testing-library/react';
import EntriesHeader from '..';
import { mockFields } from '../../../mocks';

describe('EntriesHeader', () => {
  it('should render', () => {
    const { asFragment } = render(<EntriesHeader fields={mockFields} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
