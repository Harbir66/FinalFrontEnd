import { render } from '@testing-library/react';
import ContentTypes from '..';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('ContentTypes', () => {
  test('ContentTypes should render correctly', () => {
    const { asFragment } = render(<ContentTypes />);
    expect(asFragment()).toMatchSnapshot();
  });
});
