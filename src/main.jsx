// cSpell:ignore Pokédex

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import App from './App';
import Pokedex from './pages/Pokedex';
import About from './pages/About';


const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Pokedex /> },
      { path: '/about/:name', element: <About /> }, // << Now dynamic About page
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
