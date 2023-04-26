import { ButtonMain } from "./StyledButton";

const Button = ({ onClick, title, id, activo }) => {
  return (
    <ButtonMain activo={activo} id={id} onClick={onClick}>
      {title}
    </ButtonMain>
  );
};

export default Button;
