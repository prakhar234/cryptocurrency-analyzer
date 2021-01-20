import { render, screen } from '@testing-library/react';
import PageTitle from './PageTitle';

test('renders search input box', () => {
  render(<PageTitle title="Cryptocurrency Analyser" />);
  const pageTitle = screen.getByText(/Cryptocurrency analyser/i);
  expect(pageTitle).toBeInTheDocument();
});