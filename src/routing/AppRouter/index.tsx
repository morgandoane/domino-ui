import React from 'react';

import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from 'react-router-dom';
import Domino from '../../scenes/Domino';
import Home from '../../scenes/Home';
import Login from '../../scenes/Login';
import Logout from '../../scenes/Logout';
import PrivateRoute from '../components/PrivateRoute';
import PublicOnlyRoute from '../components/PublicOnlyRoute';
import PublicRoute from '../components/PublicRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <PrivateRoute>
                <Home />
            </PrivateRoute>
        ),
    },
    {
        path: '/login',
        element: (
            <PublicOnlyRoute>
                <Login />
            </PublicOnlyRoute>
        ),
    },
    {
        path: '/logout',
        element: (
            <PublicRoute>
                <Logout />
            </PublicRoute>
        ),
    },
    {
        path: '/:id',
        element: (
            <PrivateRoute>
                <Domino />
            </PrivateRoute>
        ),
    },
    {
        path: '*',
        element: <Navigate to="/" />,
    },
]);

const AppRouter: React.FC = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
