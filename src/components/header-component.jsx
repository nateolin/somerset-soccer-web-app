import { Link } from "react-router-dom";
import sscLogo from "../assets/sscLogo.jpg";
import styled from "styled-components";

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
  height: 3.5em;
`;

const LinkContainer = styled.button`
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.4em;
  height: 100%;
  border: none;
`;

const HeaderComponent = () => {
  return (
    <div>
      <DaddyContainer>
        <Link to="/">
          <img
            src={sscLogo}
            alt="Somerset Soccer Logo"
            style={{ height: "108.8px", width: "130.4px" }}
          ></img>
        </Link>
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
    </div>
  );
};

export default HeaderComponent;
