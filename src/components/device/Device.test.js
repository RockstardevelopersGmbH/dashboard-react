import { render, screen } from '@testing-library/react';
import {Device} from './';

test('renders device name', () => {
  render(<Device name={"test name"} status={[]} />);
  const device = screen.getByText(/test name/i);
  expect(device).toBeInTheDocument();
});
