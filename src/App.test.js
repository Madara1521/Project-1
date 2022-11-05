import { render, screen } from '@testing-library/react';
import App from './App';
import KanohaJsApp from "./App";
import React from "react";

test('renders learn react link', () => {
  render(<KanohaJsApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
