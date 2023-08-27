import { MainContainer } from "./StyledLayaout";

const Main = ({ children }) => (
  <MainContainer className="scroll">{children}</MainContainer>
);

export default Main;
