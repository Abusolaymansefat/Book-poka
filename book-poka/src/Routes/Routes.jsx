import React from 'react';

import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Pages/Root/Root/Root';
import ErrorPage from '../Pages/Root/ErrorPage/ErrorPage';
import Home from '../Pages/Root/Home/Home';
import About from '../Pages/Root/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';
  
  export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            loader: () => fetch('bookData.json'),
            path: "/",
            Component: Home
        },
        {
            path: "/about",
            Component: About
        },
        {
            path: 'readList',
            Component: ReadList

        },
        {
            path: '/bookDetails/:id',
            loader: () => fetch('bookData.json'),
            Component: BookDetails
        }
      ]
      
    },
  ]);