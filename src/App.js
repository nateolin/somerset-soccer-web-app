import { Link, Outlet } from "react-router-dom";
import sscLogo from "./assets/sscLogo.jpg";
import styled from "styled-components";

const GrandpaContainer = styled.div`
  font-family: "Open Sans", sans-serif;
`;

const DaddyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  gap: 2.5rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
`;

const MommyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #ff2626;
  height: 3.5em;
`;

const BigPappiContainer = styled.div`
  padding-left: 4rem;
  padding-right: 4rem;
`;

const LinkContainer = styled.button`
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.4em;
  height: 100%;
  background-color: #ff2626;
  border: none;
`;

const App = () => {
  return (
    <GrandpaContainer>
      <DaddyContainer>
        {/* <h1 style={{ justifyContent: "flex-start" }}>Somerset Soccer Club</h1> */}

        <img
          src={sscLogo}
          alt="Somerset Soccer Logo"
          style={{ height: "108.8px", width: "130.4px" }}
        ></img>
        <h1>Somerset Soccer Club</h1>
      </DaddyContainer>
      <MommyContainer>
        <Link to="/about" style={{ textDecoration: "none", height: "100%" }}>
          <LinkContainer> About Us </LinkContainer>
        </Link>

        <Link to="/rec" style={{ textDecoration: "none", height: "100%" }}>
          <LinkContainer>Rec Soccer</LinkContainer>
        </Link>

        <Link
          to="/competitive"
          style={{ textDecoration: "none", height: "100%" }}
        >
          <LinkContainer>Competitive Soccer</LinkContainer>
        </Link>

        <Link to="/faq" style={{ textDecoration: "none", height: "100%" }}>
          <LinkContainer>FAQ's</LinkContainer>
        </Link>

        <Link to="/register" style={{ textDecoration: "none", height: "100%" }}>
          <LinkContainer>Register</LinkContainer>
        </Link>
      </MommyContainer>

      <BigPappiContainer>
        <Outlet />
      </BigPappiContainer>
    </GrandpaContainer>
  );
};

export default App;
