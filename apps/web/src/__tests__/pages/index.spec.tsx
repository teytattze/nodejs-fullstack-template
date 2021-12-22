import Home from '../../pages';
import { render, screen } from '@testing-library/react';

describe('<Home />', () => {
  it('should rendered', () => {
    render(<Home />);
    const title = screen.findByTestId(/home-page-title/);
    expect(title).toBeDefined();
  });
});
