import { Outlet, Link } from "react-router-dom";

const headingLinks = {
  padding: "1rem",
};

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "baseline" }}>
      <h1 style={{ justifyContent: "flex-start" }}>Somerset Soccer Club</h1>
      <nav
        style={{
          paddingBottom: "1rem",
          justifyContent: "flex-end",
        }}
      >
        <Link style={{ padding: "1rem" }} to="/about">
          About Us
        </Link>
        <Link style={{ padding: "1rem" }} to="/faq">
          FAQ
        </Link>
        <Link style={{ padding: "1rem" }} to="/rec">
          Rec
        </Link>
        <Link style={{ padding: "1rem" }} to="/competitive">
          Competitive
        </Link>
        <Link style={{ padding: "1rem" }} to="/register">
          Register
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
