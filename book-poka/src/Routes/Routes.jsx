import React from 'react';

import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Pages/Root/Root/Root';
import ErrorPage from '../Pages/Root/ErrorPage/ErrorPage';
  
  export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>
    },
  ]);