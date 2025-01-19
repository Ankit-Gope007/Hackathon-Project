import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Router } from 'react-router-dom'
import {Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import InfoPage from './Pages/InfoPage.jsx'
import Layout from './Layout.jsx'
import FirstPage from './Pages/FirstPage.jsx'
const routes = createBrowserRouter(createRoutesFromElements(
  <Route path = '/' element = {<Layout/>}>
    <Route path='/' element={<FirstPage/>} />
    <Route path='/Info/:Name' element={<InfoPage />} />
  </Route>

));

createRoot(document.getElementById('root')).render(
  <>
      <RouterProvider router={routes} />
  </>,
)
