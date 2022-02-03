import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HeaderComponent from "./components/header-component";
import "./App.css";

const GrandpaContainer = styled.div``;

const App = () => {
  return (
    <GrandpaContainer>
      <HeaderComponent />

      <Outlet />
    </GrandpaContainer>
  );
};

export default App;
