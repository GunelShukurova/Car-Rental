import Layout from "../layout/Layout";
import CarDetail from "../pages/CarDetail";
import Cars from "../pages/Cars";
import Favorite from "../pages/Favorite";
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
        path: "/cars",
      },
      {
        element: <CarDetail />,
        path: "/cars/:id",
      },
      {
        element: <Favorite />,
        path: "/favorites",
      },
    ],
  },
];

export default ROUTES;
