import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="fixed z-50 w-full bg-white">
      <nav className="flex items-center justify-between px-30 border-b border-gray-300 shadow-lg py-10">
        <NavLink to="/">
          <h1 className="text-4xl uppercase font-bold bg-linear-to-r from-rose-500 to-rose-300 bg-clip-text text-transparent">
            Sapnendra
          </h1>
        </NavLink>
        <div className="flex gap-10 text-lg text-gray-600 font-semibold uppercase">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-2 underline-offset-4 decoration-rose-500"
                : ""
            }
            to="/"
          >
            <h4 className="cursor-pointer">Home</h4>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-2 underline-offset-4 decoration-rose-500"
                : ""
            }
            to="/product"
          >
            <h4 className="cursor-pointer">Product</h4>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-2 underline-offset-4 decoration-rose-500"
                : ""
            }
            to="/about"
          >
            <h4 className="cursor-pointer">About</h4>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-2 underline-offset-4 decoration-rose-500"
                : ""
            }
            to="/services"
          >
            <h4 className="cursor-pointer">Services</h4>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-2 underline-offset-4 decoration-rose-500"
                : ""
            }
            to="/contact"
          >
            <h4 className="cursor-pointer">Contact</h4>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
