import { RouterProvider } from "react-router";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  );
}
