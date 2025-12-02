import { RouterProvider } from "react-router";
import AppRouter from "./router/AppRouter";

export default function App() {
  return <RouterProvider router={AppRouter} />;
}
