// Import the render and screen functions from the '@testing-library/react' library
import { render, screen } from '@testing-library/react';
// Import the App component from the './App' file
import App from './App';

// Define a test case with the description 'renders learn react link'
test('renders learn react link', () => {
  // Render the App component
  render(<App />);
  // Find the element that contains the text 'learn react' (case-insensitive search)
  const linkElement = screen.getByText(/learn react/i);
  // Assert that the linkElement is present in the document
  expect(linkElement).toBeInTheDocument();
});
