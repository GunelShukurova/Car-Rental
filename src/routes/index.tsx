import Layout from "../layout/Layout";
import Cars from "../pages/Cars";
import Home from "../pages/Home";

const ROUTES = [
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
            {

        element: <Cars />,
        path: "/cars"
      },
    ],
  },
];

export default ROUTES;
