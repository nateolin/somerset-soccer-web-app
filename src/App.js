import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/header-component";
import "./App.css";

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

export default App;
