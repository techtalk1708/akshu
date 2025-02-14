import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FirstPage from './components/firstPage';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import SecondPage from './components/secondPage';
import Convo from './components/convo.js'
import Special from './components/special.js';
import Surprise from './components/surprise.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter(
  [
    {
      path:'/',
      element:<FirstPage/>
    },
    {
      path:'yes',
      element:<SecondPage/>
    },
    {
      path:'yes/convo',
      element:<Convo/>
    },
    {
      path:'yes/special',
      element:<Special/>
    },
    {
      path:'yes/surprise',
      element:<Surprise/>
    }
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
