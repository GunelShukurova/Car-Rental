import Layout from "../layout/Layout";
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
    ],
  },
];

export default ROUTES;
