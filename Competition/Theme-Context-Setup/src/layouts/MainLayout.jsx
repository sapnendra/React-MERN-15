import { Outlet, NavLink } from "react-router";
import { useTheme } from "../context/ThemeContext";

export default function MainLayout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-all">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-800 shadow">
        <div className="flex gap-6">
          <NavLink to="/" className="text-lg font-medium hover:text-blue-600">
            Home
          </NavLink>
          <NavLink to="/about" className="text-lg font-medium hover:text-blue-600">
            About
          </NavLink>
          <NavLink to="/contact" className="text-lg font-medium hover:text-blue-600">
            Contact
          </NavLink>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>
      </nav>

      {/* Page Content */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
