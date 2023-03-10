import React from 'react';
import { render } from '@testing-library/react';
import FieldEntry from '..';

describe('FieldEntry', () => {
  it('should render', () => {
    const { asFragment } = render(
      <FieldEntry
        fieldName="test"
        handleFieldDelete={jest.fn()}
        handleFieldRename={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
