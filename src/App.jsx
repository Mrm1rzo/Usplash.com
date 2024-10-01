// import React-Router-Dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayouts from "./layouts/RootLayouts";
import { About, Contact, Home, Like } from "./pages";

import { action as HomeAction } from "./pages/Home";
import ImageInfo from "./pages/ImageInfo";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts />,
      children: [
        { index: true, path: "/", element: <Home />, action: HomeAction },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/like", element: <Like /> },
        { path: "/imageinfo", element: <ImageInfo /> },
      ],
    },
  ]);
  return <RouterProvider router={routes}>App App</RouterProvider>;
}

export default App;
