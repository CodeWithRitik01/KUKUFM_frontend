import React, {lazy, Suspense} from 'react';

import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const Navbar  = lazy(() => import('./Navbar/navbar'))
const Home  = lazy(() => import('./Home/home'))
const TopPicks  = lazy(() => import('./TopPicks/topPicks'))
const Topten  = lazy(() => import('./Topten/topten'))
const Vipshows  = lazy(() => import('./Vipshows/vipshows'))
const DummyPage = lazy(() => import('./DummyPage/dummyPage'))

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <Suspense fallback={<div><h1>Loading...</h1></div>}>
        <Home />
        <TopPicks />
        <Topten />
        <Vipshows />
      </Suspense>
    </div>
  );
}

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<div><h1>Loading...</h1></div>}>
           <MainLayout />
        </Suspense>
      ),
      children:[
        {path: '/', element: <HomePage />},
        {path: "dummy", element: <DummyPage />}
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
