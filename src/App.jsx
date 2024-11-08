import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Root from './pages/Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route>
        <Route index element={<Home/>}/>
      </Route>
    </Route>
  )
);


const App = () => {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App
