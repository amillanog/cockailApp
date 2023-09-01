import { FooterContainer } from "./StyledLayaout";

const Footer = () => {
  return (
    <FooterContainer>
      <p className="text-footer">
        amillanog@gmail.com © {new Date().getFullYear()}
      </p>
    </FooterContainer>
  );
};

export default Footer;
