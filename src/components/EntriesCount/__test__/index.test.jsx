import React from 'react';
import { render } from '@testing-library/react';
import EntriesCount from '..';

describe('EntriesCount', () => {
  it('should render correctly with search icon', () => {
    const { asFragment } = render(
      <EntriesCount count={10} type="mockType" showSearch />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render correctly without search icon', () => {
    const { asFragment } = render(<EntriesCount count={10} type="mockType" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
