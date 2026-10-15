import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "destination/:name?",
        lazy: () => import("./pages/Destination"),
        errorElement: (
          <NotFound
            msg={"The Planet Name Is Not Found!"}
            path={"destination"}
          />
        ),
      },
      {
        path: "crew/:name?",
        lazy: () => import("./pages/Crew"),
        errorElement: (
          <NotFound msg={"The Crew Name Is Not Found!"} path={"crew"} />
        ),
      },
      {
        path: "technology/:name?",
        lazy: () => import("./pages/Technology"),
        errorElement: (
          <NotFound
            msg={"The Technology Name Is Not Found!"}
            path={"technology"}
          />
        ),
      },
      {
        path: "*",
        element: <NotFound msg={"The Page Is Not Found!"} path={"/"} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
