import { Outlet, NavLink } from "react-router";

export default function MainLayout() {
  return (
    <div>
      {/* Navbar */}
      <nav style={styles.nav}>
        <NavLink to="/" style={styles.link}>
          Home
        </NavLink>
        <NavLink to="/about" style={styles.link}>
          About
        </NavLink>
        <NavLink to="/contact" style={styles.link}>
          Contact
        </NavLink>
      </nav>

      {/* Page Content */}
      <div style={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "12px",
    background: "#f0f0f0",
  },
  link: {
    fontSize: "18px",
    textDecoration: "none",
    color: "#333",
  },
  content: {
    padding: "20px",
  },
};
