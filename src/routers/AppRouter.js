import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { LoginScreen } from '../components/login/LoginScreen'
import { HomeScreen } from '../components/home/HomeScreen'
import { ErrorScreen } from '../components/errorScreen/ErrorScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const AppRouter = () => {
    const routers = createBrowserRouter([
        {
            path: '/',
            element: <HomeScreen />,
            errorElement: <ErrorScreen />,
            children: [
                {
                    path: "/dc",
                    element: <DcScreen />
                },
                {
                    path: "/marvel",
                    element: <MarvelScreen />
                },
                {
                    path: "/hero/:heroeId",
                    element: <HeroScreen />
                },
                {
                    path: "/search",
                    element: <SearchScreen />
                },
            ],
        },        
        {
            path: "/login",
            element: <LoginScreen />
        },
    ]);

  return (
    <RouterProvider router={ routers } />
  )
}
