import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Search from './Search';

const setSearchQuery = jest.fn();

test('renders search input box', () => {
  render(<Search setSearchQuery={setSearchQuery} />);
  const inputElement = screen.getByPlaceholderText("Enter cryptocurrency name or code");
  expect(inputElement).toBeInTheDocument();
});

test("Allows user to enter code or names in search field", () => {
    render(<Search setSearchQuery={setSearchQuery} />);
    const inputElement = screen.getByPlaceholderText("Enter cryptocurrency name or code");
    fireEvent.change(inputElement, { target: { value: '23' }});
    expect(inputElement).toHaveValue('23')
});

test("Error to be present when invalid value is entered", () => {
    render(<Search setSearchQuery={setSearchQuery} />);
    const inputElement = screen.getByPlaceholderText("Enter cryptocurrency name or code");
    fireEvent.change(inputElement, { target: { value: '@#$@@$@#$' }});
    const errorElement = screen.getByText("Please enter valid cryptocurrency name or code!");
    expect(errorElement).toBeInTheDocument();
})