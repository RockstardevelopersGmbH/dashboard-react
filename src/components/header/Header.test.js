import { render, screen } from "@testing-library/react";
import { Header } from ".";

test("renders title", () => {
  render(<Header />);
  const header = screen.getByText(/Dashboard/i);
  expect(header).toBeInTheDocument();
});
