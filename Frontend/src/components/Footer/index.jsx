import { StyledFooter } from "./style";

const Footer = () => {
  return (
    <StyledFooter>
      <p className="descriptionFooter">
        {" "}
        &copy; {new Date().getFullYear()} - Stockify
      </p>
    </StyledFooter>
  );
};

export default Footer;
