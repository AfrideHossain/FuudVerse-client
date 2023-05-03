import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import Home from "../components/Home/Home";
import ChefRecipes from "../components/ChefRecipes/ChefRecipes";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "chefrecipes",
        element: <ChefRecipes />,
      },
    ],
  },
]);

export default router;
