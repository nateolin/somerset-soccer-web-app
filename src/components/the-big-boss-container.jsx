import HeaderComponent from "./header-component";

const TheBigBossContainer = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  );
};

export default TheBigBossContainer;
