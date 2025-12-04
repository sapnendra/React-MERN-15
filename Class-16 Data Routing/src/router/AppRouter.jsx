import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import AppLayout from "../layout/AppLayout";
import App from "../App";
import Product from "../pages/Product";
import { Loader } from "lucide-react";

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
          hydrateFallbackElement: (
            <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-50 text-rose-500 inline-block">
              <Loader className="h-20 w-20 animate-spin"/>
            </span>
          ),
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
