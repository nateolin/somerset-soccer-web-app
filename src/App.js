import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HeaderComponent from "./components/header-component";
import "./App.css";

const GrandpaContainer = styled.div`
  font-family: "Open Sans", sans-serif;
`;

const App = () => {
  return (
    <GrandpaContainer>
      <HeaderComponent />

      <Outlet />
    </GrandpaContainer>
  );
};

export default App;
