import { render } from '@testing-library/react';
import React from 'react';
import { mockCollection } from '../../../mocks';
import Sidebar from '../index';

describe('Sidebar', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Sidebar
        collections={mockCollection}
        handleViewChange={jest.fn()}
        handleCollectionChange={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
