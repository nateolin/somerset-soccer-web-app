import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Somerset Soccer Club</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/about">About Us</Link> | <Link to="/faq">FAQ</Link>
      </nav>
      <Outlet />
    </div>
  );
}
