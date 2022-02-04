import { Link } from "react-router-dom";
import sscLogo from "../assets/sscLogo.jpg";

const HeaderComponent = () => {
  return (
    <div className="flex flex-row flex-wrap py-6 items-center">
      <div className="flex items-center basis-1/2">
        <Link to="/">
          <img
            src={sscLogo}
            alt="Somerset Soccer Logo"
            // style={{ height: "54.4px", width: "81.5px" }} //reg height and width is 108.8 x 163
          ></img>
        </Link>
        <strong>Somerset Soccer Club</strong>
      </div>
      <div className="flex flex-row-reverse basis-1/2">
        <div>
          <Link to="/about">About Us</Link>

          <Link to="/rec">Rec Soccer</Link>

          <Link to="/competitive">Competitive Soccer</Link>

          <Link to="/faq">FAQ's</Link>

          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
