import { render, screen } from '@testing-library/react';
import upoload from './upload';

test('renders learn react link', () => {
  render(<upload />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
