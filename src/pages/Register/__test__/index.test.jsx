import { render } from '@testing-library/react';
import Register from '../index';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('Register', () => {
  test('Register should render correctly', () => {
    const { asFragment } = render(<Register />);
    expect(asFragment()).toMatchSnapshot();
  });
});
