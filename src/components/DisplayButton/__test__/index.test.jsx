import React from 'react';
import { render } from '@testing-library/react';
import DisplayButton from '..';

describe('DisplayButton', () => {
  it('should render correctly when selected ', () => {
    const { asFragment } = render(
      <DisplayButton text={test} count={10} selected onClick={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render correctly when not selected ', () => {
    const { asFragment } = render(
      <DisplayButton
        text={test}
        count={10}
        selected={false}
        onClick={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
