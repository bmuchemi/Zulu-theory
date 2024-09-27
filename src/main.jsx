// import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import Blog from './Blog'; // Ensure this points to the correct file

// Get the root element
const rootElement = document.getElementById('root');

// Create a root and render your component
const root = createRoot(rootElement);
root.render(<Blog />);
