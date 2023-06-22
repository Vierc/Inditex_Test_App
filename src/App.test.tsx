import { render, screen } from '@testing-library/react';
import App from "./App";

describe("App Component", () => {
  test('renders content', () => {
    render(<App />)
    expect(screen.getAllByText('Hello World!')).toBeTruthy()
  })
})