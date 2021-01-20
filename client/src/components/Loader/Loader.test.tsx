import { render, screen } from '@testing-library/react';

import Loader from './Loader';


test('renders Loader', () => {
    render(<Loader />);
    const loader = screen.queryByTestId('loader');
    expect(loader).toBeInTheDocument();
});
