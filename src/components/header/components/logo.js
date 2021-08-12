import React from "react";
import { bool } from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import { MEDIA } from "../../../shared";
import { MyBrownSVG } from "../../../assets/svgs/icons";

export default function Logo({ show }) {
  return (
    <LogoWrap to="/" data-testid="header-logo-link">
      <Image>
        <MyBrownSVG />
      </Image>
    </LogoWrap>
  );
}

const LogoWrap = styled(Link)`
  margin: auto 0;

  ${MEDIA.smallScreen} {
    padding-left: 1rem;
  }
`;

const Image = styled.div`
  transition: width 0.5s;
  width: ${props => props.size}px;
  margin: 0 auto;

  svg {
    width: 100%;
  }

  ${MEDIA.smallScreen} {
    width: 100px;
    transform: translate(0, 3px);
  }
`;

Logo.propTypes = {
  show: bool.isRequired
};
