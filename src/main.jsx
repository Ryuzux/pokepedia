import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PokePage from './pages/pokepage';
import BerryPage from './pages/berrypage';
import ItemPage from './pages/itempage';
import { PartyProvider } from './context/Partycontext';
import { BagProvider } from './context/Bagcontext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokePage/>
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
    <BagProvider> 
    <PartyProvider>  
      <RouterProvider router={router} />
    </PartyProvider>
    </BagProvider>
  </React.StrictMode>
)
