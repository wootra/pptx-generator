import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    RouteObject,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import './common.css';
import './output.css';
import { ErrorBoundary, ROUTES } from './routes/router';
import App from './App';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: ROUTES as RouteObject[],
        errorElement: <ErrorBoundary />,
    },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        {/* <VisualApp /> */}
    </React.StrictMode>
);
