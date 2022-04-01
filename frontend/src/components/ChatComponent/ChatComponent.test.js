import { render, screen } from '@testing-library/react';
import ChatComponent from './ChatComponent';

test('renders learn react link', () => {
  render(<ChatComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
