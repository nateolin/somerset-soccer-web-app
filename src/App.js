import { Link, Outlet } from "react-router-dom";
import sscLogo from "./assets/sscLogo.jpg";
import styled from "styled-components";

const DaddyContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MommyContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

const LinkContainer = styled.div`
  padding: 1rem;
`;

// const LinkContainer = styled.div`
//   padding: 1rem;
// `;

const App = () => {
  return (
    <div>
      <DaddyContainer>
        {/* <h1 style={{ justifyContent: "flex-start" }}>Somerset Soccer Club</h1> */}
        <img src={sscLogo} alt="Somerset Soccer Logo"></img>
        <MommyContainer>
          <Link to="/about">
            <LinkContainer> About Us </LinkContainer>
          </Link>

          <Link to="/rec">
            <LinkContainer>Rec Soccer</LinkContainer>
          </Link>

          <Link to="/competitive">
            <LinkContainer>Competitive Soccer</LinkContainer>
          </Link>

          <Link to="/faq">
            <LinkContainer>FAQ's</LinkContainer>
          </Link>

          <Link to="/register">
            <LinkContainer>Register</LinkContainer>
          </Link>
        </MommyContainer>
      </DaddyContainer>
      <Outlet />
    </div>
  );
};

export default App;
