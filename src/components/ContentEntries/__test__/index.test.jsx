import React from 'react';
import { render } from '@testing-library/react';
import ContentEntries from '..';
import { mockFields } from '../../../mocks';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('ContentEntries', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <ContentEntries
        entry="mockEntry"
        fields={mockFields}
        index={1}
        handleDeleteEntries={jest.fn()}
        selectedCollectionId={2}
        setEntries={jest.fn()}
        selectedCollectionAllFields={mockFields}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
