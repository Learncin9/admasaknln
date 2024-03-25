import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';

import App from './page/app';
import Thank from './page/thank';

import "./styles/frame.css"
import Logo from './page/logo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/thank",
    element: <Thank />
  },
  {
    path: "/logo",
    element: <Logo />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Header />
      <div className="frame">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </React.StrictMode>,
)
