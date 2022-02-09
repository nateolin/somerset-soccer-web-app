import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/header-component";

const App = () => {
  return (
    <div className="md:container md:mx-auto">
      <HeaderComponent />
      <div className="relative mx-10vw">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
