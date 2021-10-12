import React from "react";
import {
  HeaderWrapper,
  HeaderLogo,
  HeaderNav,
  HeaderTertiary,
  HeaderContent,
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderLogo>eComm-</HeaderLogo>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
