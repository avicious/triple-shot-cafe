import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  RootLayout,
  ErrorPage,
  HomePage,
  ProcessPage,
  StoryPage,
  ContactPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/process", element: <ProcessPage /> },
      { path: "/story", element: <StoryPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
