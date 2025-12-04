import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import AppLayout from "../layout/AppLayout";
import App from "../App";
import Product from "../pages/Product";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: AppLayout,
      children: [
        {
          index: true,
          Component: App,
        },
        {
          path: "/product",
          loader: async () => {
            try {
              const res = await fetch("https://fakestoreapi.com/products");
              return res.json();
            } catch (error) {
              console.log("Error:", error);
            }
          },
          Component: Product,
        },
        {
          path: "/about",
          Component: About,
        },
        {
          path: "/services",
          Component: Services,
        },
        {
          path: "/contact",
          Component: Contact,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
};

export default AppRouter;
