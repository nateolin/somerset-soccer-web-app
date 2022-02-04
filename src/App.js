import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/header-component";

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

export default App;
