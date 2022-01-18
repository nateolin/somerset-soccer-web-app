import { Outlet, Link } from "react-router-dom";
import ssc-logo from "";

const headingLinks = {
  padding: "1rem",
};

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "baseline" }}>
      {/* <h1 style={{ justifyContent: "flex-start" }}>Somerset Soccer Club</h1> */}
      <img src="./assets/ssc-logo.jpg" alt="Somerset Soccer Logo"></img>
      <nav
        style={{
          paddingBottom: "1rem",
          justifyContent: "flex-end",
        }}
      >
        <Link style={{ padding: "1rem" }} to="/about">
          About Us
        </Link>
        <Link style={{ padding: "1rem" }} to="/rec">
          Rec Soccer
        </Link>
        <Link style={{ padding: "1rem" }} to="/competitive">
          Competitive Soccer
        </Link>
        <Link style={{ padding: "1rem" }} to="/faq">
          FAQ's
        </Link>
        <Link style={{ padding: "1rem" }} to="/register">
          Register
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
