import { Outlet } from "react-router-dom";
import FooterComponent from "./components/footer-component";
import HeaderComponent from "./components/header-component";

const App = () => {
  return (
    <div className="md:container md:mx-auto">
      <HeaderComponent />
      <div className="relative">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
};

export default App;
