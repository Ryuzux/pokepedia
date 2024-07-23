import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PokePage from './pages/pokepage';
import BerryPage from './pages/berrypage';
import ItemPage from './pages/itempage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>
      <a href="/pokemon">Pokemon</a>
    </h1>
  },
  {
    path: "/pokemon",
    element: <PokePage/>
  },
  {
    path: "/berry",
    element: <BerryPage/>
  },
  {
    path: "/item",
    element: <ItemPage/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
