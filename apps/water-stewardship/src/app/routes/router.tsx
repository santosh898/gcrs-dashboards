import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Root from './root';
const Route1 = lazy(() => import('./route-1'));
const Route2 = lazy(() => import('./route-2'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'example-1',
        element: (
          <Suspense fallback={<>loading</>}>
            <Route1 />
          </Suspense>
        ),
      },
      {
        path: 'example-2',
        element: (
          <Suspense fallback={<>loading</>}>
            <Route2 />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
