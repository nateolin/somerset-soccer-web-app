import { Link, Outlet } from "react-router-dom";
import sscLogo from "./assets/sscLogo.jpg";
import styled from "styled-components";

const BigPappiContainer = styled.div`
  padding-left: 4rem;
  padding-right: 4rem;
`;

const DaddyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Open Sans", sans-serif;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 1rem;
`;

const MommyContainer = styled.div`
  display: flex;
`;

const LinkContainer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const App = () => {
  return (
    <div>
      <DaddyContainer>
        {/* <h1 style={{ justifyContent: "flex-start" }}>Somerset Soccer Club</h1> */}
        <img
          src={sscLogo}
          alt="Somerset Soccer Logo"
          style={{ height: "114px", width: "221.25px" }}
        ></img>
        <MommyContainer>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <LinkContainer> About Us </LinkContainer>
          </Link>

          <Link to="/rec" style={{ textDecoration: "none" }}>
            <LinkContainer>Rec Soccer</LinkContainer>
          </Link>

          <Link to="/competitive" style={{ textDecoration: "none" }}>
            <LinkContainer>Competitive Soccer</LinkContainer>
          </Link>

          <Link to="/faq" style={{ textDecoration: "none" }}>
            <LinkContainer>FAQ's</LinkContainer>
          </Link>

          <Link to="/register" style={{ textDecoration: "none" }}>
            <LinkContainer>Register</LinkContainer>
          </Link>
        </MommyContainer>
      </DaddyContainer>
      <BigPappiContainer>
        <Outlet />
      </BigPappiContainer>
    </div>
  );
};

export default App;
