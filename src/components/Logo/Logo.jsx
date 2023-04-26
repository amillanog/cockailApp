import { BoxLogo } from "./StyledLogo";

const Logo = ({ src, title }) => (
  <BoxLogo>
    <img src={src} alt="logo" />
    {title !== undefined ? <span>{title}</span> : null}
  </BoxLogo>
);

export default Logo;
