import Home from "../pages/Home";
import MasterLayout from "../pages/MasterLayout";
import { createBrowserRouter } from "react-router-dom";
 

const routes = [
  {
    path: "/",
    element: <MasterLayout />,
    // role: [""],
    children: [
      {
        path: "/",
        element: <Home />,
        // role: [""],
      },
    ],
  },
];


const router = createBrowserRouter(routes);
export default router;
