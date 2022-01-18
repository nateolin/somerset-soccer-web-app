import { Outlet, Link } from "react-router-dom";
import sscLogo from "./assets/sscLogo.jpg";
import Typography from "@mui/material/Typography";

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "baseline" }}>
      {/* <h1 style={{ justifyContent: "flex-start" }}>Somerset Soccer Club</h1> */}
      <img src={sscLogo} alt="Somerset Soccer Logo"></img>
      <nav
        style={{
          paddingBottom: "1rem",
          justifyContent: "flex-end",
        }}
      >
        <Typography>
          <Link style={{ padding: "1rem" }} to="/about">
            About Us
          </Link>
        </Typography>
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
