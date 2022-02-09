import { Link } from "react-router-dom";
import sscLogo from "../assets/sscLogo.jpg";

const HeaderComponent = () => {
  return (
    <div className="px-5vw py-9 lg:py-12">
      <nav className="mx-auto flex items-center max-w-8xl justify-between">
        <Link className="flex items-center" to="/">
          <img
            src={sscLogo}
            alt="Somerset Soccer Logo"
            width="100"
            height="100"
          />

          <div className="px-4 text-2xl text-slate-600">
            <div className="underlined focus:outline-none block whitespace-nowrap font-medium transition ease-in-out hover:text-red-600 duration-200 delay-50">
              Somerset Soccer Club
            </div>
          </div>
        </Link>

        <div className="flex items-center justify-center font-medium">
          <div className="px-5">
            <Link to="/about">
              <div className="text-slate-600 text-lg hover:text-red-600 duration-200 delay-50">
                About Us
              </div>
            </Link>
          </div>
          <div className="px-5">
            <Link to="/rec">
              <div className="text-slate-600 text-lg hover:text-red-600 duration-200 delay-50">
                Rec Soccer
              </div>
            </Link>
          </div>
          <div className="px-5">
            <Link
              className="text-slate-600 text-lg hover:text-red-600 duration-200 delay-50"
              to="/competitive"
            >
              Competitive Soccer
            </Link>
          </div>
          <div className="px-5">
            <Link
              className="text-slate-600 text-lg hover:text-red-600 duration-200 delay-50"
              to="/faq"
            >
              FAQ's
            </Link>
          </div>

          <div className="px-5">
            <Link
              className="text-slate-600 text-lg hover:text-red-600"
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
