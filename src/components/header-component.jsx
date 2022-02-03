import { Link } from "react-router-dom";
import sscLogo from "../assets/sscLogo.jpg";

const HeaderComponent = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <img
            src={sscLogo}
            alt="Somerset Soccer Logo"
            style={{ height: "54.4px", width: "81.5px" }} //reg height and width is 108.8 x 163
          ></img>
        </Link>
        <h1>Somerset Soccer Club</h1>
      </div>
      <div>
        <Link to="/about" style={{ textDecoration: "none", height: "100%" }}>
          About Us
        </Link>

        <Link to="/rec" style={{ textDecoration: "none", height: "100%" }}>
          Rec Soccer
        </Link>

        <Link
          to="/competitive"
          style={{ textDecoration: "none", height: "100%" }}
        >
          Competitive Soccer
        </Link>

        <Link to="/faq" style={{ textDecoration: "none", height: "100%" }}>
          FAQ's
        </Link>

        <Link to="/register" style={{ textDecoration: "none", height: "100%" }}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
