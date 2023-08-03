import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail,
} from "./components";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Feed />,
        },
        {
          path: "/video/:id",
          element: <VideoDetail />,
        },
        {
          path: "/channel/:id",
          element: <ChannelDetail />,
        },
        {
          path: "/search/:inputData",
          element: <SearchFeed />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
