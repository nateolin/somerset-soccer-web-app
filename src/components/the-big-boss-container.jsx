import HeaderComponent from "./header-component";
import styled from "styled-components";

const GrandpaContainer = styled.div`
  font-family: "Open Sans", sans-serif;
`;

const TheBigBossContainer = ({ children }) => {
  return (
    <GrandpaContainer>
      <HeaderComponent />
      {children}
    </GrandpaContainer>
  );
};

export default TheBigBossContainer;
