import { ButtonMain } from "./StyledButton";

const Button = ({ children, onClick, id, activo }) => {
  return (
    <ButtonMain activo={activo} id={id} onClick={onClick}>
      {children}
    </ButtonMain>
  );
};

export default Button;
