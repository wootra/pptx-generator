import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    RouteObject,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import './output.css';
import './common.css';
import { ErrorBoundary, ROUTES } from './routes/router';
import App from './App';
import VisualApp from './VisualApp';

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
        {/* <RouterProvider router={router} /> */}
        <VisualApp />
    </React.StrictMode>
);
